// import { CButton } from "@coreui/react";
// import "../Card/card.css";
// import "./popup.css";
// import React, { useState } from "react";

// const Popup = ({ data }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const togglePopup = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <CButton onClick={togglePopup} className='card_button'>Share Ride</CButton>
//       {isOpen && (
//         <div className="popup">
//           <div className="popup-inner">
//             <button className="close-btn" onClick={togglePopup}>
//               &times;
//             </button>
//             <div className="content">Thank for connecting with us! 
//             Dear {data.name}, we have informed your pooler about your sharing.</div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
// export default Popup;

import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
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
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Popup({data}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Share Ride
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Ride Share Confirmed!
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          Dear {data.name}, Thank for connecting with us! We have informed your pooler about the ride sharing.
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
