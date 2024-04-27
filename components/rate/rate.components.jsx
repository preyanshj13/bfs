
//*************USING MODAL MUI */
import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import FormLabel from '@mui/material/FormLabel';
import { AiOutlineClose } from "react-icons/ai";

import './rate.styles.scss';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


function Rate() {
  const [open, setOpen] = React.useState(true);
  // const [value, setValue] = React.useState(null);
  
  // const navigate=useNavigate();

  const handleClose = () => {
    setOpen(false);
    // navigate('/');
  };
  const handleWaiver=(e)=>{
    console.log(e);
    // navigate(`/Waiver/${e.data.loan}`)
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: "50%" }}>
        <Box
        //margin
        // m={1}
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Button color="grey" variant="contained" onClick={handleClose}>
          <AiOutlineClose/>&nbsp; Close
        </Button>
      </Box>
      
        <h4 id="parent-modal-title">ARE YOU SURE ?</h4>
        <Box
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
      </Box>
        <FormLabel id="demo-row-radio-buttons-group-label">
          Want to save your loan details and apply for new loan.
        </FormLabel>
        


      {/* DatePicker and Input Section */}
      <DialogContent>
      
      </DialogContent>


      <DialogActions>
          <Button onClick={handleClose} >
            CANCEL
          </Button>
          <Button variant="contained" onClick={handleWaiver}>
          APPLY
          </Button>
        </DialogActions>
        </Box>
      </Modal>
    </div>
  );
}

export default Rate;


//*************USING MODAL MUI */










