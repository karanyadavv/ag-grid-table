import React, { useState } from "react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
ModuleRegistry.registerModules([AllCommunityModule]);
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import data from "../data/data.json";

const AgGridTable = () => {
  const [rowData, setRowData] = useState(data.employees);

  const cols = Object.keys(data.employees[0]).map((item) => ({
    field: item,
  }));
  console.log(cols);
  const [colDefs, setColDefs] = useState(cols);
  return (
    <div style={{ height: 800 }}>
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
};

export default AgGridTable;
