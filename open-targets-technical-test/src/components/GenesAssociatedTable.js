import React, { useState } from "react";
import * as Icons from "react-bootstrap-icons";
import ChartWrapper from "./ChartWrapper";
import { OpenTargetsPlatformUrl } from "./AppConstants";

// displays table with given genes associated table and charts for each row
const GenesAssociatedTable = ({ theadData, tbodyData, tableHeader }) => {
  // store associated target rows to display in table
  const [associationTargets, setAssociationTargets] = useState(null);

  return (
    <div>
      <h2>{tableHeader}</h2>
      <table className="table table-bordered">
        <thead>
          <tr key="headerrow">
            <th></th>
            {theadData.map(item => {
              return (
                <th scope="col" key={item}>
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tbodyData.map(item => {
            return (
              <React.Fragment>
                <tr key={item.targetId}>
                  <td
                    className="plus-button"
                    onClick={() => setAssociationTargets(item)}
                  >
                    <Icons.Plus></Icons.Plus>
                  </td>
                  <td>
                    <a
                      className="App-link"
                      href={OpenTargetsPlatformUrl + item.targetId}
                    >
                      {" "}
                      {item.approvedSymbol}
                    </a>
                  </td>
                  <td>{item.geneName}</td>
                  <td>{item.overallAssociationScore}</td>
                </tr>
                {associationTargets &&
                  associationTargets.targetId === item.targetId && (
                    <tr key={item.uniqueKeyForCharts}>
                      <td colSpan="4">
                        {associationTargets && (
                          <ChartWrapper
                            approvedSymbol={associationTargets.approvedSymbol}
                            dataTypeScores={associationTargets.datatypeScores}
                          ></ChartWrapper>
                        )}
                      </td>
                    </tr>
                  )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GenesAssociatedTable;
