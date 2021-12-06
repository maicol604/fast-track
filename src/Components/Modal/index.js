import * as React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '40%',
  borderRadius:'.25em',
  bgcolor: 'background.paper',
  //border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default ({open, onClose, children}) => {
  

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
      >
        <Box sx={style}>
            {
                children
            }
        </Box >
      </Modal>
    </div>
  );
}
