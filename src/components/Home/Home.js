import "./Home.css";
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search'

import 'ag-grid-enterprise';

import {AgGridReact} from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// eslint-disable-next-line
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import TextField from "@mui/material/TextField";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

// import CustomizedDialogs from "./components/CustomizedDialogs";

// const MyComp = params => {
//   const renderCountRef = useRef(1);
//   return (
//     <><b>({renderCountRef.current++})</b> {params.value}</>
//   );
// };

function Home() {

  // const apiKey = process.env.REACT_APP_API_KEY;
  // const {REACT_APP_API_KEY} = process.env


  // const gridRef = useRef();

  const [gridApi, setGridApi] = useState(null);
  // eslint-disable-next-line
  const [gridColumnApi, setGridColumnApi] = useState(null);
  // const [status, setStatus] = useState([]);
  // const [hideColumn, setHideColumn] = useState(false);
  // const [rec, setRec] = useState([])
  // const [borrower, setBorrower] = useState('')
  // const [address, setAddress] = useState('')
  // const [city, setCity] = useState('')
  // const [country, setCountry] = useState('')
  // const [amount, setAmount] = useState('')
  // const [type, setType] = useState('')
  // const [product, setProduct] = useState('')
  // const [status, setStatus] = useState('')
  // const [days, setDays] = useState('')
  // const [approver, setApprover] = useState('');
  // const [reason, setReason] = useState('');

  const [rowData, setRowData] = useState([])
  useEffect(() => {
    axios
      .get('https://my-json-server.typicode.com/preyanshj13/mockjsons/records')
      // .get('https://jsonblob.com/api/jsonBlob/1037277749479489536')
      // .get('https://jsonblob.com/api/jsonBlob/1030467251559743488')
      // .get('http://localhost:3000/records')
      .then((res) => {
        if( res.status === 200) {
          setRowData(res.data)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
    

  const columnDefs = [
    {/*width: 136,*/ headerName: 'Loan Number', field: 'id', filter: 'agNumberColumnFilter'},
    {/*width: 162,*/ headerName: 'Primary Borrower', field: 'borrower', filter: 'agTextColumnFilter'},
    {/*width: 175,*/ headerName: 'Property Address', field: 'address', filter: 'agTextColumnFilter'},
    {/*width: 140,*/ headerName: 'City', field: 'city', filter: 'agTextColumnFilter'},
    {/*width: 125,*/ headerName: 'Country', field: 'country', filter: 'agTextColumnFilter'},
    {/*width: 136,*/ headerName: 'Loan Amount', field: 'amount', filter: 'agNumberColumnFilter'},
    {/*width: 126,*/ headerName: 'Loan Type', field: 'type', filter: 'agTextColumnFilter'},
    {/*width: 130,*/ headerName: 'Product', field: 'product', filter: 'agTextColumnFilter'},
    {/*width: 120,*/ headerName: 'Status', field: 'status', filter: 'agTextColumnFilter'},
    {/*width: 85,*/ headerName: 'Days', field: 'days', filter: 'agNumberColumnFilter'}
  ];

  const defaultColDef = useMemo(() => ({
    sortable: true,
    flex: 1,
    filterParams: {
      debounceMs: 500,
      buttons: ['apply', 'clear']
    }
    // cellRenderer: MyComp
  }), []);


  // For row clicked

  // const cellClickedListener = useCallback(e => {
  //   console.log(`cell clicked `, e);
  // },[]);


  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  }

  const onFilterTextChange = (e) => {
    gridApi.setQuickFilter(e.target.value)
  }

  const navigate = useNavigate();

  // const handleRowClick = () => {
    // navigate('CustomizedDialogs')
  // }

  // For row clicked

  // const cellClickedListener = useCallback(e => {
  //   console.log(`cell clicked `, e.data.borrower);
  // },[]);
  // const [status, setStatus] = useState('')

  
  const rowClickedListener = useCallback(e => {
    swal("Approve the application?", `Applicant: ${e.data.borrower}`, {
      buttons: {
        cancel: "Reject",
        catch: {
          className: "approBtn",
          text: "Approve"
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
          // swal("Approved", "Record has been approved successfully");
          navigate(`/bfs/WaiverDialog/${e.data.id}`)
          console.log(`approved ${e.data.status}`)
          break;

        default:
          swal("Rejected", "Record has been rejected")
          // axios.put('https://jsonblob.com/api/jsonBlob/1037277749479489536')
          
          // axios.put(`https://my-json-server.typicode.com/preyanshj13/mockjsons/records/${e.data.id}`,{status})

          // axios.get(`http://localhost:3000/records/${e.data.id}`)
          // .then(() => {
          //   setBorrower(e.data.borrower)
          //   setAddress(e.data.address)
          //   setCity(e.data.city)
          //   setCountry(e.data.country)
          //   setAmount(e.data.amount)
          //   setType(e.data.type)
          //   setProduct(e.data.product)
          //   setStatus('Rejected')
          //   setDays(e.data.days)
          //   setApprover(e.data.approver)
          //   setReason(e.data.reason)
          // })
      

          // axios.put(`http://localhost:3000/records/${e.data.id}`,{borrower, address, city, country, amount, type, product, status, days, approver, reason})
          // .then(setBorrower(borrower), setAddress(address), setCity(city), setCountry(country), setAmount(amount), setType(type), setProduct(product), setStatus(status), setDays(days), setApprover(approver),setReason(reason))

            // () => {
            // setStatus('Rejected')
            // e.data.status === 'Reject';
            // console.log(e.data.status)
          // })
      }
    });
  },[]);

  return (
    <>
    <h1 className="heading">All Loans</h1>

    <div className="searchDiv"> 
      {/* <input type='search' onChange={onFilterTextChange} className="searchBar" placeholder="Loan # | Pool Name | Pool ID | Client Name | Property Address"></input> */}
      <TextField className="searchBar" onChange={onFilterTextChange} label="Search" variant="standard" placeholder="Loan # | Pool Name | Pool ID | Client Name | Property Address"/>
      <button className="searchBtn" /*onClick={onFilterTextChange}*/><IconButton><SearchIcon style={{fontSize:'large'}}/></IconButton>SEARCH</button>
    </div>

    <div className="ag-theme-alpine" style={{height: 520}}>
      <AgGridReact
        // style={{alignItems: 'right'}}
        // onCellClicked={cellClickedListener}
        onGridReady={onGridReady}
        rowData={rowData}
        columnDefs={columnDefs}
        animateRows={true}
        defaultColDef={defaultColDef}
        pagination={true}
        onRowClicked={rowClickedListener}
        // paginationAutoPageSize={true}
        // onCellClicked={() => setOpened(true)}
        // onCellClicked={rowClicked}
        paginationPageSize={10}
        // rowStyle={{fontSize:'10px'}}
        // sideBar={true}
        sideBar={{
          toolPanels:[
            {
              id:"columns",
              labelDefault:'Columns',
              labelKey:'columns',
              iconKey:'columns',
              toolPanel: 'agColumnsToolPanel',
              toolPanelParams:{
                suppressPivotMode: true,
                suppressRowGroups: true,
                suppressValues: true
              }
            }
          ],
        }}
      />
    </div>
    </>
  );
}

export default Home;