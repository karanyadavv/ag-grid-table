import React, { useState } from "react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { themeQuartz } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import data from "../data/data.json";

const AgGridTable = () => {
  const [rowData, setRowData] = useState(data.employees);

  const cols = Object.keys(data.employees[0]).map((item) => ({
    field: item,
  }));
  const [colDefs, setColDefs] = useState(cols);

  // const myTheme = themeQuartz.withParams({
  //   backgroundColor: "oklch(43.9% 0 0)",
  //   foregroundColor: "oklch(92.2% 0 0)",
  //   headerTextColor: "oklch(96.7% 0.001 286.375)",
  //   headerBackgroundColor: "oklch(26.9% 0 0)",
  //   oddRowBackgroundColor: "oklch(37.1% 0 0)",
  //   headerColumnResizeHandleColor: "oklch(96.7% 0.001 286.375)",
  //   borderColor:
  // });

  const myTheme = themeQuartz.withParams({
    backgroundColor: "#232529ff",
    browserColorScheme: "dark",
    chromeBackgroundColor: {
      ref: "foregroundColor",
      mix: 0.07,
      onto: "backgroundColor",
    },
    foregroundColor: "#e6e2e2ff",
    headerFontSize: 14,
  });
  return (
    <div className="ag-theme-quartz" style={{ height: 700, marginTop: 40 }}>
      <AgGridReact rowData={rowData} columnDefs={colDefs} theme={myTheme} />
    </div>
  );
};

export default AgGridTable;
