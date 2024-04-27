//*************USING MODAL MUI */

import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
  
import { TextField } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WebAssetOutlinedIcon from '@mui/icons-material/WebAssetOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router';
import { useEffect, useState } from "react";
import axios from "axios";
import Box from '@mui/material/Box';

import './waiver.styles.scss'


  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));
  
  function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
            <span style={{ fontSize: "small" }}>CLOSE</span>
          </IconButton>
        ) : null}
     
      </DialogTitle>
    );
  }
  
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };
  

function Waiver() {
    const [open, setOpen] = React.useState(true);
    const [inputList, setInputList] = React.useState([]);


    const [rec, setRec] = useState([])
    const [borrower, setBorrower] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [amount, setAmount] = useState('')
    const [type, setType] = useState('')
    const [product, setProduct] = useState('')
    const [status, setStatus] = useState('')
    const [days, setDays] = useState('')
    const [approver, setApprover] = useState('');
    const [reason, setReason] = useState('');
    const [full, setFull] = useState(false);
  
    let {id}=useParams();

    const navigate=useNavigate();

      const handleClose = () => {
        setOpen(false);
        setFull(false);
        navigate('/'); 
      };
    


      const handleSave = () => {
        axios.put(`http://localhost:3000/records/${id}`, {borrower, address, city, country, amount, type, product, status, days, approver, reason})
        .then(setBorrower(borrower), setAddress(address), setCity(city), setCountry(country), setAmount(amount), setType(type), setProduct(product), setStatus(status), setDays(days), setApprover(approver),setReason(reason))
        .then(navigate('/'))
        }


        useEffect(() => {
          axios
          .get(`http://localhost:3000/records/${id}`)
          // .get(`https://my-json-server.typicode.com/preyanshj13/mockjsons/records/${id}`)
          .then((res) => {
          setRec(res.data)
          setBorrower(res.data.borrower)
          setAddress(res.data.address)
          setCity(res.data.city)
          setCountry(res.data.country)
          setAmount(res.data.amount)
          setType(res.data.type)
          setProduct(res.data.product)
          setStatus('Approved')
          setDays(res.data.days)
          setApprover(res.data.approver)
          setReason(res.data.reason)
          // setAmt(res.data.amount)
          })
          // .catch((error) => {
          // console.log(error);
          // });
          },[id])

          const FullScr = () => {
            setFull(true);
          }


          const onRemove = event => {
            setInputList(inputList.concat(
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '23ch' },
              }}
              noValidate
              autoComplete="off"
            >
          </Box>
          ));
          };


          const onAddBtnClick = event => {
            // setRowNum(rowNum+1)
            console.log(event.timeStamp)
        
            setInputList(inputList.concat(
              <div className="detailRow">
              
              <TextField id="standard-basic" className="applies" label="Applies to" variant="standard" required/>
        
              <TextField id="standard-basic" className="amount" label="Amount" variant="standard"/>
        
              <TextField id="standard-basic" className="modifiedBy" label="Modified By" variant="standard"/>
        
              <TextField id="standard-basic" className="modifiedDate" label="Modified Date" variant="standard"/>
        
              <div className="remove" id="rowNum"> 
                  <DeleteOutlinedIcon className="removeButton" onClick={onRemove} fontSize="small"/><span>REMOVE</span>
              </div>
            
            </div>
          ));
          };
  
          
    return (
      <div>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullScreen={full}
        fullWidth
        maxWidth
      >
        <div style={{display:'flex'}}>
            <HomeOutlinedIcon fontSize="x-small" style={{padding:'3px 0px 0px 2px'}} /> <p style={{fontSize:'small'}}> &gt; Waivers</p>
        </div>

        <div>
            <div>
            <BootstrapDialogTitle
                id="waivers"
                className="waivers"
                onClose={handleClose}
            >
                Waivers
            </BootstrapDialogTitle>
            </div>

            <div className="button-fullscreen">
                <Button onClick={FullScr} className='btnfull' sx={{color:'black', backgroundColor:'lightgray', marginRight:'10px'}}>
                    <WebAssetOutlinedIcon fontSize="small"/>
                    FULLSCREEN
                </Button>
                <Button onClick={FullScr} className='btnadd' sx={{color:'black', backgroundColor:'lightgray'}}>
                    ADD WAIVER 
                </Button>
            </div>
        </div>
        
        <DialogContent>

          <div className="detailBox">

            <div className="amountRow">
                <div className="totAmount">
                    <span>Total Amount</span>
                    <span> $ {rec.amount} </span>
                </div>
                <div>
                    <DeleteOutlinedIcon fontSize="small"/>
                </div>
            </div>

            <div className="textfields">

                <TextField
                    id="standard-basic"
                    className="approved"
                    // type="text"
                    label="Approved By"
                    variant="standard"
                    required
                    marginRight='10px'
                    onChange={(e)=>setApprover(e.target.value)}
                />

                <TextField
                    id="standard-basic"
                    className='reason'
                    // type='text'
                    label="Reason"
                    variant="standard"
                    required
                    onChange={(e)=>setReason(e.target.value)}
                />
            </div>

            <div className="itemHead">
                <div>
                    <h3>Itemization</h3>
                </div>

                <div>
                    <Button onClick={onAddBtnClick} className='btnadd' sx={{color:'black', backgroundColor:'lightgray'}}>
                        ADD ITEMIZATION
                    </Button>
                </div>
            </div>


            {inputList}
          </div><hr/>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
          <Button autoFocus onClick={handleSave}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
    );
  }
  



export default Waiver;

//*************USING MODAL MUI */


