import "./GenesAssociatedApp.css";
import React from "react";
import { LungCarcinomaAssociatedTargetsApiPayload } from "./components/ApiConstants";
import UseFetch from "./components/UseFetch";
import { GeneAssociatedTableHeaders } from "./components/AppConstants";
import GenesAssociatedTable from "./components/GenesAssociatedTable";

const GenesAssociatedApp = () => {
  //fetching data from api with lung carcinoma associated target payload
  const { genesAssociatedData, isLoading } = UseFetch(
    LungCarcinomaAssociatedTargetsApiPayload
  );

  return (
    <div className="app container">
      {isLoading && genesAssociatedData == null
        ? "please wait while page is loading..."
        : genesAssociatedData && (
            <GenesAssociatedTable
              theadData={GeneAssociatedTableHeaders}
              tbodyData={genesAssociatedData}
              tableHeader="Genes associated with lung carcinoma"
            />
          )}
    </div>
  );
};

export default GenesAssociatedApp;
