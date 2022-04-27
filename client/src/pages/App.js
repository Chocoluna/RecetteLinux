import React, {useRef, useState} from 'react';
import { Button, CssBaseline } from '@material-ui/core';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Image, Layer, Stage } from 'react-konva';
import useImage from 'use-image';
import MenuAppBar from '../components/Header';
//CSS
import '../css/App.css';
import { useStylesDark, useStylesLight } from '../css/AppStyle';
import { getTheme } from '../theme';


export function ChangeThemeApp(){
  var theme = getTheme();

  if(theme === "light") {
    classes = light;
    styles = light;
  }
  else {
    classes = dark;
    styles = dark;
  }
}

var light;
var dark;
var classes;
var styles;

function App() {
  light = useStylesLight();
  dark = useStylesDark();
  ChangeThemeApp();

  const [open, setOpen] = useState(false);
  const handleOpen = () => { setOpen(true); };
  const handleClose = () => { setOpen(false); };

  const BackgroundImage = () => {
    const [image] = useImage('https://zupimages.net/up/22/16/am6s.png');
    return <Image image={image} width={window.innerHeight} height={window.innerHeight} />;
  };
  
  const Toast = () => {
    const [image] = useImage('https://zupimages.net/up/22/17/q2h8.png');
    return <Image image={image} width={window.innerHeight*0.10} 
              height={window.innerHeight*0.10} 
              x={window.innerHeight*0.034} 
              y={window.innerHeight*0.23}
              onClick={handleOpen}
              style="cursor: pointer;"
              />;
  };
  
  const Avocado = () => {
    const [image] = useImage('https://zupimages.net/up/22/17/ea5h.png');
    return <Image image={image} width={window.innerHeight*0.05} 
              height={window.innerHeight*0.05} 
              x={window.innerHeight*0.26} 
              y={window.innerHeight*0.54}
              onClick={handleOpen}
              style="cursor: pointer;"
              />;
  };
  const Lemon = () => {
    const [image] = useImage('https://zupimages.net/up/22/17/zfm2.png');
    return <Image image={image} width={window.innerHeight*0.04} 
              height={window.innerHeight*0.04} 
              x={window.innerHeight*0.87} 
              y={window.innerHeight*0.34}
              onClick={handleOpen}
              style="cursor: pointer;"
              />;
  };
  return (
      <div className={classes.root}>
        <CssBaseline />
        <div justifyContent= "center">
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className={classes.modal}
          >
            <Box  className={classes.modal2}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
              <Button onClick={handleClose} className={classes.BtnMots}> Valider mes réponses </Button>
            </Box>
          </Modal>
        </div>
        <MenuAppBar />
        <div className={classes.center}>
          <Stage width={window.innerHeight} height={window.innerHeight * 0.95} styles="border-color: black">
            <Layer>
              <BackgroundImage/>
            </Layer>
            <Layer>
              <Toast />
              <Avocado />
              <Lemon />              
            </Layer>
          </Stage>
        </div>
      </div>
  );
}

export default App;