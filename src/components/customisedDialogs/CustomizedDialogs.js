import * as React from "react";
import './CustomizedDialogs.css'
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

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { TextField } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WebAssetOutlinedIcon from '@mui/icons-material/WebAssetOutlined';
import { useNavigate } from "react-router-dom";

// import App from "../App";

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

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(true);
  const [full, setFull] = React.useState(false)

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
    setFull(false)
    navigate('/')
  };

  const handleWaiver = () => {
    navigate('/WaiverDialog')
  }

  const FullScr = () => {
    setFull(true);
  }

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog1
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
        <HomeOutlinedIcon fontSize="x-small" style={{padding:'1% 4px 0 1%'}} /> 
        <p style={{fontSize:'small'}}> &gt; Rate Lock</p>
        </div>

        <div className="headerRow">
          <BootstrapDialogTitle
            id="rate"
            class="rateLock"
            onClose={handleClose}
          >
            Rate Lock
          </BootstrapDialogTitle>

          <Button onClick={FullScr} className='fullbtn' sx={{color:'black', backgroundColor:'lightgray'}}>
            <WebAssetOutlinedIcon fontSize="small"/>
              FULLSCREEN
          </Button>
        </div>
        
        <DialogContent /*dividers*/>
          {/* <h5>Status</h5> */}
          {/* <Typography fontSize={12} fontWeight={600} gutterBottom>
            Status
          </Typography> */}

          <FormControl>
            <FormLabel id="status">
              Status
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              className="radios"
            >
              <FormControlLabel
                value="standard"
                control={<Radio />}
                label="Standard Lock"
                
              />
              <FormControlLabel
                value="lock"
                control={<Radio />}
                label="Lock and Doc"
              />
            </RadioGroup>
          </FormControl>

          <div className="row1">
            <FormLabel className="from">
              {/* Valid From */}
              <TextField
                id="standard-basic"
                
                className='valid'
                type="date"
                label="Valid From"
                variant="standard"
              />
            </FormLabel>

            <FormLabel className="till">
              {/* Expires On */}
              <TextField
                id="standard-basic"
                className='expiry'
                type="date"
                label="Expires On"
                variant="standard"
              />
            </FormLabel>

            <FormLabel className="ftp" >
              <TextField 
                id="standard-basic" 
                className='ftp'
                placeholder="FTP"
                // type='date' 
                label="FTP" 
                variant="standard"
              />
            </FormLabel>
          </div>

            <FormLabel className="notes" >
              <TextField 
                id="standard-basic" 
                className='notes'
                label="Notes" 
                variant="standard" 
              />
            </FormLabel>


          {/* <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography> */}

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
          <Button autoFocus onClick={handleWaiver}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
