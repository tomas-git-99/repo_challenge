import { useEffect, useState } from "react";
import * as React from 'react';
import Wallet from "../../utils/wallet";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


function ConnectWallet() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [wallet, setWallet] = useState('');
    const [balance, setBalance] = useState('');

    let walletClass = new Wallet();

    useEffect(() => {
        walletClass.check()
        .then(x => {
            console.log(x)
        })
        .catch(x => {
            console.log(x);
            setOpen(true);
        })
    }, [])

 
   
      window.ethereum.on('accountsChanged', function (accounts) {
        // Time to reload your interface with accounts[0]!
        console.log(accounts)

      });

      window.ethereum.on('chainChanged', (chainId) => {
        // Handle the new chain.
        // Correctly handling chain changes can be complicated.
        // We recommend reloading the page unless you have good reason not to.
        console.log(chainId)
        
      });



    return (
        <div>
            <h4>{"Connection to MetaMask using window.ethereum methods"}</h4>
            <button  onClick={ () => walletClass.connect()}>Connect Wallet</button>
            <p>Address: {wallet}</p>
            <p>Balance: {balance}</p>

            <button onClick={() => walletClass.handleTranfert()}>Enviar</button>

            <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
        </div>

        
    );
};

export default ConnectWallet;