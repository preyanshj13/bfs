import React, { useEffect, useRef, useState, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';

//Grid links for css imports
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AllCommunityModules } from '@ag-grid-community/all-modules';

//for sidebar filter and search necessary to import
import 'ag-grid-enterprise';
import './home.styles.scss'



import axios from 'axios';

import {useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { wait } from '@testing-library/user-event/dist/utils';

const Home=()=>{

    const gridRef = useRef();
    const [rate,setRate]=useState(false);
    // const [rowData, setRowData] =useState([])
    // //Calling api from backend(server.js)
    // useEffect(() => {
    //     fetch('http://localhost:3000/api')
    //     .then(res => res.json())
    //     .then(result => setRowData(result.data));
    // }, []);

    const [rowData, setRowData] = useState([])
    
    const API_URL='http://localhost:3000/records';
    const fetchData =  async() => {
        return await axios.get(API_URL);
      };
       useEffect(() => {
        fetchData().then((res) => {
        if( res.status === 200) {
        setRowData(res.data)
        }
        })
        .catch((error) => {
        console.log(error);
        });
        }, []);

    //Setting up the Columns Field in AG Grid
    const columnDef=[
        // { headerName:'Loan Number',cellRenderer: valuerender, field: 'loan', width: 150, filter:true,sortable:true},
        { headerName:'Loan Number',field: 'id',width: 150, filter:true,sortable:true},
        { headerName:'Primary Borrower', field: 'borrower',width: 170, filter:true,sortable:true},
        { headerName:'Property Address', field: 'address',filter:true,sortable:true },
        { headerName:'City', field: 'city',filter:true,width: 100,sortable:true},
        { headerName:'State', field: 'country', filter:true,width: 100,sortable:true},
        { headerName:'Loan Amount', field: 'amount',filter:true,width: 150,sortable:true },
        { headerName:'Loan Type', field: 'type', filter:true,width: 130,sortable:true},
        { headerName:'Product', field: 'product', filter:true,width: 130,sortable:true},
        { headerName:'Status', field: 'status',filter:true,width: 120,sortable:true },
        { headerName:'Days', field: 'days',filter:true,width: 90,sortable:true }

    ]


    //Getting data from search input field
    const onFilterChange=(e)=>{
        gridRef.current.api.setQuickFilter(e.target.value);
        console.log(e.target.value);
    }


    const navigate=useNavigate();
    
    const changeRowClicked=useCallback(e => {
        swal("Approve the application?", `Applicant: ${e.data.borrower}`, {
        buttons: {
        cancel: "Reject",
        catch: {
        text: "Approve",
        },
        },
        })
        .then((value) => {
        switch (value) {
        case "catch":
        // swal("Approved", "Record has been approved successfully");
        navigate(`/Waiver/${e.data.id}`)
        console.log(`approved ${e.data.status}`)
        break;
         
        default:
        swal("Rejected", "Record has been rejected")
        // axios.put(`https://my-json-server.typicode.com/preyanshj13/mockjsons/records/${e.data.id}`,{status})
        // .then(() => {
        // console.log(e.data.status)
        // })
        }
        }); 
        },[]);

    return(
        <div className="ag-theme-alpine ag-custom" style={{height: 510}}> 
        <input className='search-box' type="search" onChange={onFilterChange} placeholder="Loan# | Pool Name | Pool ID | Client Name | Property Address" />
        

        <AgGridReact 
        rowData={rowData}
        columnDefs={columnDef} 
        pagination={true} 
        paginationPageSize={10} 
        onRowClicked={changeRowClicked}
        //Code for customized Sidebar filtering
        sideBar={{
            toolPanels:[
                {
                    id:"columns",
                    labelDefault:"Columns",
                    labelKey:"columns",
                    iconKey:"columns",
                    toolPanel:"agColumnsToolPanel",
                    toolPanelParams:{
                        suppressPivotMode:true,
                        suppressRowGroups:true,
                        suppressValues:true
                    }
                }
            ]
        }}
        ref={gridRef}
        />
        </div>
    )
}

export default Home;



