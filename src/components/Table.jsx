import React, { useState } from "react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { themeQuartz } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);
import { AgGridReact } from "ag-grid-react";
import data from "../data/data.json";

const AgGridTable = () => {
  const [rowData, setRowData] = useState(data.employees);

  const cols = Object.keys(data.employees[0]).map((item) => ({
    field: item,
  }));
  const [colDefs, setColDefs] = useState(cols);

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
    <div className="ag-theme-quartz" style={{ height: 550, marginTop: 40 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        theme={myTheme}
        animateRows={true}
        pagination={true}
        paginationPageSize={10}
        defaultColDef={{
          sortable: true,
          filter: true,
          resizable: true,
          menuTabs: ["filterMenuTab", "generalMenuTab"],
          floatingFilter: false,
        }}
      />
    </div>
  );
};

export default AgGridTable;
