// import "./App.css";
// import axios from 'axios';
// import SearchIcon from '@mui/icons-material/Search'

// import 'ag-grid-enterprise';

// import {AgGridReact} from 'ag-grid-react'
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// // eslint-disable-next-line
// import { useState, useEffect, useRef, useMemo, useCallback } from "react";
// import TextField from "@mui/material/TextField";
// import { IconButton } from "@mui/material";
// import { Modal, Button, Group } from '@mantine/core';
// import Self from "./components/Self";
// import WaiverDialog from "./components/WaiverDialog";
// import { useNavigate } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/appBar/ResponsiveAppBar";
import CustomizedDialogs from "./components/customisedDialogs/CustomizedDialogs";
import WaiverDialog from "./components/waiverDialog/WaiverDialog";
import Home from "./components/Home/Home";

function App() {
  
  return (
    <>
    <ResponsiveAppBar />
      <Home />
      <Routes>
        <Route path="/CustomizedDialogs" element={<CustomizedDialogs />} />
        <Route path="/WaiverDialog/:id" element={<WaiverDialog />} />
        {/* <Route path="Waiver/RateLock" element={<RateLock />} /> */}
      </Routes>
    </>
  );
}

export default App;

// jest in react
// jestjs.io