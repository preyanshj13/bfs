import * as React from 'react';
import './CustomizedDialogs.css';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// import Typography from "@mui/material/Typography";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { TextField } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WebAssetOutlinedIcon from '@mui/icons-material/WebAssetOutlined';
function Self() {
  const [full, setFull] = React.useState(false);

  const handleClose = () => {
    // setOpen(false);
    setFull(false);
  };

  const FullScr = () => {
    setFull(true);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        // open={open}
        fullScreen={full}
        fullWidth
        maxWidth
        // style={{width:'100%'}}
      >
        <div style={{ display: 'flex' }}>
          <HomeOutlinedIcon
            fontSize="x-small"
            style={{ padding: '1% 4px 0 1%' }}
          />{' '}
          <p style={{ fontSize: 'small' }}> &gt; Rate Lock</p>
        </div>

        <div className="headerRow">
          <BootstrapDialogTitle
            id="rate"
            class="rateLock"
            onClose={handleClose}
          >
            Rate Lock
          </BootstrapDialogTitle>

          <Button
            onClick={FullScr}
            className="fullbtn"
            sx={{ color: 'black', backgroundColor: 'lightgray' }}
          >
            <WebAssetOutlinedIcon fontSize="small" />
            FULLSCREEN
          </Button>
        </div>

        <DialogContent /*dividers*/>
          {/* <h5>Status</h5> */}
          {/* <Typography fontSize={12} fontWeight={600} gutterBottom>
            Status
          </Typography> */}

          <FormControl>
            <FormLabel id="status">Status</FormLabel>
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
                className="valid"
                type="date"
                label="Valid From"
                variant="standard"
              />
            </FormLabel>

            <FormLabel className="till">
              {/* Expires On */}
              <TextField
                id="standard-basic"
                className="expiry"
                type="date"
                label="Expires On"
                variant="standard"
              />
            </FormLabel>

            <FormLabel className="ftp">
              <TextField
                id="standard-basic"
                className="ftp"
                placeholder="FTP"
                // type='date'
                label="FTP"
                variant="standard"
              />
            </FormLabel>
          </div>

          <FormLabel className="notes">
            <TextField
              id="standard-basic"
              className="notes"
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
          <Button onClick={handleClose}>Cancel</Button>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

export default Self;
