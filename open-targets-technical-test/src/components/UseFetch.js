import { useEffect, useState } from "react";
import { GetByQuery } from "./DiseaseAssociatedTargetService";
import { GraphQlUrl } from "./ApiConstants";
import _ from "underscore";

const UseFetch = payload => {
  // genesAssociatedData to store the associatedTargetRows of 'lung carcinoma', set to empty array by default
  const [genesAssociatedData, setGenesAssociatedData] = useState([]);

  // isLoading to store user friendly message while page is loading, set to false by deafult
  const [isLoading, setIsLoading] = useState(false);

  // using 'useEffect' to call api once mounted and set the data
  useEffect(async () => {
    setIsLoading(true);

    // graph api call to fetch data
    let associatedTargetRows = await GetByQuery(GraphQlUrl, payload);

    setIsLoading(false);

    //set genes associated data fetched by api
    setGenesAssociatedData(getGeneAssociatedData(associatedTargetRows));
  }, [payload]); // if payload changes, useEffect will run again

  return {
    genesAssociatedData,
    isLoading
  };
};

// modify the genes associated data to a required format that can be used in table
const getGeneAssociatedData = associatedTargetRows => {
  let associatedtargets = [];
  associatedTargetRows.forEach((item, index) => {
    associatedtargets.push({
      approvedSymbol: item.target && item.target.approvedSymbol,
      geneName: item.target && item.target.approvedName,
      overallAssociationScore: Number(item.score).toFixed(3),
      targetId: item.target && item.target.id,
      datatypeScores: item.datatypeScores,
      uniqueKeyForCharts: index
    });
  });

  return _.last(
    _.sortBy(associatedtargets, "overallAssociationScore"),
    10
  ).reverse();
};

export default UseFetch;
