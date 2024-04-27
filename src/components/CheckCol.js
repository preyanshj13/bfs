import React from "react";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function CheckCol() {
  // const [gridColumnApi, setGridColumnApi] = useState(null);
  const [hideColumn, setHideColumn] = useState(false);
  
  const showColumn = () => {
    return gridColumnApi.setColumnVisible('days',hideColumn);
    setHideColumn(!hideColumn);
  }
  return (
    <div>
      <Checkbox onChange={showColumn} defaultChecked></Checkbox>
      <Typography variant="subtitle">Days</Typography>
    </div>
  );
}

export default CheckCol;

{/*     
    <div style={{display:'flex'}}>
      <div>
        <Checkbox onChange={showNumber} defaultChecked></Checkbox>
        <Typography variant="subtitle">Loan Number</Typography>
      </div>
      <div>
        <Checkbox onChange={showBorrower} defaultChecked></Checkbox>
        <Typography variant="subtitle">Primary Borrower</Typography>
      </div>
      <div>
        <Checkbox onChange={showAddress} defaultChecked></Checkbox>
        <Typography variant="subtitle">Property Address</Typography>
      </div>
      <div>
        <Checkbox onChange={showCity} defaultChecked></Checkbox>
        <Typography variant="subtitle">City</Typography>
      </div>
      <div>
        <Checkbox onChange={showCountry} defaultChecked></Checkbox>
        <Typography variant="subtitle">Country</Typography>
      </div>
      <div>
        <Checkbox onChange={showAmount} defaultChecked></Checkbox>
        <Typography variant="subtitle">Loan Amount</Typography>
      </div>
      <div>
        <Checkbox onChange={showType} defaultChecked></Checkbox>
        <Typography variant="subtitle">Loan Type</Typography>
      </div>
      <div>
        <Checkbox onChange={showProduct} defaultChecked></Checkbox>
        <Typography variant="subtitle">Product</Typography>
      </div>
      <div>
        <Checkbox onChange={showStatus} defaultChecked></Checkbox>
        <Typography variant="subtitle">Status</Typography>
      </div>
      <div>
        <Checkbox onChange={showColumn} defaultChecked></Checkbox>
        <Typography variant="subtitle">Days</Typography>
      </div>
    </div> */}

    
  // const showNumber = () => {
  //   gridColumnApi.setColumnVisible('loan_no',hideColumn);
  //   setHideColumn(!hideColumn);
  // }
  // const showBorrower = () => {
  //   gridColumnApi.setColumnVisible('borrower',hideColumn);
  //   setHideColumn(!hideColumn);
  // }
  // const showAddress = () => {
  //   gridColumnApi.setColumnVisible('address',hideColumn);
  //   setHideColumn(!hideColumn);
  // }
  // const showCity = () => {
  //   gridColumnApi.setColumnVisible('city',hideColumn);
  //   setHideColumn(!hideColumn);
  // }
  // const showCountry = () => {
  //   gridColumnApi.setColumnVisible('country',hideColumn);
  //   setHideColumn(!hideColumn);
  // }
  // const showAmount = () => {
  //   gridColumnApi.setColumnVisible('amount',hideColumn);
  //   setHideColumn(!hideColumn);
  // }
  // const showType = () => {
  //   gridColumnApi.setColumnVisible('type',hideColumn);
  //   setHideColumn(!hideColumn);
  // }
  // const showProduct = () => {
  //   gridColumnApi.setColumnVisible('product',hideColumn);
  //   setHideColumn(!hideColumn);
  // }
  // const showStatus = () => {
  //   gridColumnApi.setColumnVisible('status',hideColumn);
  //   setHideColumn(!hideColumn);
  // }
  // const showColumn = () => {
  //   gridColumnApi.setColumnVisible('days',hideColumn);
  //   setHideColumn(!hideColumn);
  // }