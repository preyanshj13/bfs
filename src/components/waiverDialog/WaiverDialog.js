import * as React from "react";
import './WaiverDialog.css'
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
// import Typography from "@mui/material/Typography";

// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";
import { TextField } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WebAssetOutlinedIcon from '@mui/icons-material/WebAssetOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router';
import { useEffect, useState } from "react";
import axios from "axios";
// import { AiOutlineClose,AiFillDelete,AiOutlineHome,AiOutlineFullscreen } from "react-icons/ai";

// import App from "../../App";
import { Box } from "@mui/system";

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
    {/* <HomeOutlinedIcon /> */}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function WaiverDialog() {
  const [open, setOpen] = useState(true);
  const [full, setFull] = useState(false);

  // const [amt, setAmt] = useState();
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
  // const [status, setStatus] = useState();

  let {id} = useParams();
  // console.log(id);

      
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
    setFull(false);
    navigate('/'); 
  };

  const handleSave = () => {
    // axios.put(`https://my-json-server.typicode.com/preyanshj13/mockjsons/records/${id}`, {approver, reason})
    // axios.put(`https://my-json-server.typicode.com/preyanshj13/mockjsons/records/${id}`, {borrower, address, city, country, amount, type, product, status, days, approver, reason})
    axios.put(`http://localhost:3000/records/${id}`, {borrower, address, city, country, amount, type, product, status, days, approver, reason})
      .then(setBorrower(borrower), setAddress(address), setCity(city), setCountry(country), setAmount(amount), setType(type), setProduct(product), setStatus(status), setDays(days), setApprover(approver),setReason(reason))
      .then(navigate('/')) 
    // .then(console.log(id))
  }

  const FullScr = () => {
    setFull(true);
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
      //   console.log(error);
      // });
  },[id])
  // console.log(reason);

  // let [rowNum, setRowNum] = useState(0)
  // rowNum = 0;
  // let rowNum =0;

  const removeDataRow = (e) => {
    // var rowNum = e.target.id;
    console.log(inputList);
    
    // const rowNums = document.querySelectorAll('.rowNum');
    // rowNums.forEach(rowNum => {
    //   rowNum.remove();
    // });
  }

  let removeFormFields = (i) => {
    console.log(i)

    // let newFormValues = [...inputList];
    // newFormValues.splice(i, 1);
    // setInputList(newFormValues)
}
  // npm lint for unwanted code

  const onRemove = event => {
    setInputList(inputList.concat(
    <Box>
  </Box>
  ));
  };

  const onAddBtnClick = event => {
    // setRowNum(rowNum+1)
    // console.log(event.timeStamp)
    // document.getElementsByClassName('detailRow').id = rowNum;
    // console.log(document.getElementsByClassName('detailsRow'))

    setInputList(inputList.concat(
      <div className="detailRow" id="rowNum">
      
      <TextField id="standard-basic" className="applies" label="Applies to" variant="standard" required/>

      <TextField id="standard-basic" className="amount" label="Amount" variant="standard"/>

      <TextField id="standard-basic" className="modifiedBy" label="Modified By" variant="standard"/>

      <TextField id="standard-basic" className="modifiedDate" label="Modified Date" variant="standard"/>

      <div className="remove" id="rowNum"> 
          <DeleteOutlinedIcon className="removeButton" onClick={onRemove} fontSize="small"/><span>REMOVE</span>
      </div>
      
      {/* <Button className='remove-waiver-button' color="grey" onClick={onAddBtnClick} variant="contained" sx={{height:25,backgroundColor:"white",color:"black" }}>
        <AiFillDelete/> &nbsp; REMOVE
      </Button> */}
    </div>
  ));
  };


  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullScreen={full}
        fullWidth
        maxWidth
        // style={{width:'100%'}}
      >
        <div style={{display:'flex'}}>
            <HomeOutlinedIcon fontSize="x-small" style={{padding:'1% 4px 0 1%'}} /> <p style={{fontSize:'small'}}> &gt; Waivers</p>
        </div>

        <div className="header">
            <div>
            <BootstrapDialogTitle
                id="waivers"
                className="waivers"
                onClose={handleClose}
            >
                Waivers
            </BootstrapDialogTitle>
            </div>

            <div>
                <Button onClick={FullScr} className='btnfull' sx={{color:'black', backgroundColor:'lightgray', marginRight:'10px'}}>
                    <WebAssetOutlinedIcon fontSize="small"/>
                    FULLSCREEN
                </Button>
                <Button onClick={FullScr} className='btnadd' sx={{color:'black', backgroundColor:'lightgray'}}>
                    ADD WAIVER
                </Button>
            </div>
        </div>
        
        <DialogContent /*dividers*/>
          {/* <h5>Status</h5> */}
          {/* <Typography fontSize={12} fontWeight={600} gutterBottom>
            Status
          </Typography> */}

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

            <div className="detailRow">
                <TextField
                    id="standard-basic"
                    className="applies"
                    // type="text"
                    label="Applies to"
                    variant="standard"
                    required
                    // marginRight='10px'
                />

                <TextField
                    id="standard-basic"
                    className="amount"
                    // type="text"
                    label="Amount"
                    variant="standard"
                    // required
                    // marginRight='10px'
                />

                <TextField
                    id="standard-basic"
                    className="modifiedBy"
                    // type="text"
                    label="Modified By"
                    variant="standard"
                    // required
                    // marginRight='10px'
                />

                <TextField
                    id="standard-basic"
                    className="modifiedDate"
                    // type="text"
                    label="Modified Date"
                    variant="standard"
                    // required
                    // marginRight='10px'
                />

                <div className="remove">
                    <DeleteOutlinedIcon className="abc" fontSize="small" onClick={removeDataRow} /><span>REMOVE</span>
                </div>
            </div>
            {inputList}
          </div><hr/>

          {/* <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography> */}

        </DialogContent >
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
