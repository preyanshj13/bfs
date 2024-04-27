import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import ResponsiveAppBar from './components/ResponsiveAppBar';
// import BootstrapDialog from './components/CustomizedDialogs'
// import CustomizedDialogs from './components/CustomizedDialogs';
// import WaiverDialog from './components/WaiverDialog';
// import Self from './components/Self';
// import Ratelock from './components/Ratelock';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ResponsiveAppBar /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <CustomizedDialogs /> */}
    {/* <WaiverDialog /> */}
    {/* <Ratelock /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
