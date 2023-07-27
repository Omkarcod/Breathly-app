import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Chip,Box } from '@mui/material';

import TextField from '@mui/material/TextField';

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
//   const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Chip style={{backgroundColor:"rgb(211, 47, 47)",color:"white"}} label="Unvarified" onClick={handleClickOpen}>
        
      </Chip>
      <Dialog
        // fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Varify Your Email"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          Please enter your email here. We will send the OTP.
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
   
      <TextField id="standard-basic" label="Enter email address" variant="standard" style={{width
    :"100%"}} />
    </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
        CANCEL
          </Button>
          <Button onClick={handleClose} autoFocus>
            VERIFY NOW
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}