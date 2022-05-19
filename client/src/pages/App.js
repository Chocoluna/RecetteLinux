import React, { useState } from 'react';
import { Button, CssBaseline } from '@material-ui/core';
import MenuAppBar from '../components/Header';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Activity, {loadQuestionData} from '../components/ModalActivity';
import DisplayRecipe from '../components/ModalRecipe';
import DisplayClass from '../components/ModalClass';
import Typography from '@mui/material/Typography';
import { Image, Layer, Stage } from 'react-konva';
import useImage from 'use-image';
import {Level1, Level2} from '../BDD/Item.json';
//CSS
import '../css/App.css';
import { useStylesDark, useStylesLight } from '../css/AppStyle';
import { getTheme } from '../theme';
import cross from '../assets/cross.png';


export function ChangeThemeApp(){
  let theme = getTheme();

  if(theme === "light") {
    classes = light;
    styles = light;
  }
  else {
    classes = dark;
    styles = dark;
  }
}

let light;
let dark;
let classes;
let styles;
let currentLevel = 1;
let currentLevelData = Level1;

function App() {
  light = useStylesLight();
  dark = useStylesDark();
  ChangeThemeApp();

  const [openModalActivity, setOpenActivity] = useState(false);
  const handleOpenActivity = (elem) => { loadQuestionData(elem) ; setOpenActivity(true); };
  const handleCloseActivity = () => { setOpenActivity(false); };
  
  const [openModalRecipes, setOpenRecipes] = useState(false);
  const handleOpenRecipes = () => { setOpenRecipes(true); };
  const handleCloseRecipes = () => { setOpenRecipes(false); };

  const [openModalClass, setOpenClass] = useState(false);
  const handleOpenClass = () => { setOpenClass(true); };
  const handleCloseClass = () => { setOpenClass(false); };

  const BackgroundImage = () => {
    const [image] = useImage('https://raw.githubusercontent.com/Chocoluna/RecetteLinux/main/client/src/assets/Kitchen.png');
    return <Image image={image} width={window.innerHeight} height={window.innerHeight} />;
  };

  const LoadItem = ({elem}) => {
    const [image] = useImage(elem.Image);
    return <Image image={image} width={window.innerHeight*elem.Height} 
              height={window.innerHeight*elem.Height} 
              x={window.innerHeight*elem.PosX} 
              y={window.innerHeight*elem.PosY}
              onClick={() => handleOpenActivity(elem.Nom)}
              style="cursor: pointer;"
              />;
  };

  const RecipeBook = () => {
    const [image] = useImage('https://raw.githubusercontent.com/Chocoluna/RecetteLinux/main/client/src/assets/book.png');
    return <Image image={image} width={window.innerHeight*0.10} 
              height={window.innerHeight*0.10} 
              x={window.innerHeight*0.034} 
              y={window.innerHeight*0.81}
              onClick={handleOpenRecipes}
              style="cursor: pointer;"
              />;
  };
  
  const ClassBook = () => {
    const [image] = useImage('https://raw.githubusercontent.com/Chocoluna/RecetteLinux/main/client/src/assets/book2.png');
    return <Image image={image} width={window.innerHeight*0.10} 
              height={window.innerHeight*0.10} 
              x={window.innerHeight*0.14} 
              y={window.innerHeight*0.81}
              onClick={handleOpenClass}
              style="cursor: pointer;"
              />;
  };

  const Test = () => {
    currentLevelData = Level2;
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MenuAppBar />
      <div>
        <Modal
          open={openModalActivity}
          onClose={handleCloseActivity}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className={classes.modalQuizz}
        >
          <Box >
            <Button onClick={handleCloseActivity} className={classes.buttonClose}><img src={cross} alt="Close" height="40vh" /></Button>
            <Activity/>
          </Box>
        </Modal>
      </div>
      <div>
        <Modal
            open={openModalRecipes}
            onClose={handleCloseRecipes}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className={classes.modalBook}
          >
            <Box >
              <Button onClick={handleCloseRecipes} className={classes.buttonClose}><img src={cross} alt="Close" height="40vh" /></Button>
              <Typography>Recettes</Typography>
              <DisplayRecipe/>
            </Box>
          </Modal>
      </div>
      <div justifyContent="flex-start">
        <Modal
            open={openModalClass}
            onClose={handleCloseClass}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className={classes.modalBook}
          >
            <Box>
              <Button onClick={handleCloseClass} className={classes.buttonClose}><img src={cross} alt="Close" height="40vh" /></Button>
              <Typography>Recettes</Typography>
              <DisplayClass/>
            </Box>
          </Modal>
        </div>
        <div className={classes.center}>
          <Stage width={window.innerHeight} height={window.innerHeight * 0.95} styles="border-color: black">
            <Layer>
              <BackgroundImage/>
            </Layer>
            <Layer>
              <RecipeBook />
              <ClassBook />
              { currentLevelData.map(items => <LoadItem elem={items}/>)}              
            </Layer>
          </Stage>

        </div>
    </div>
  );
}

export default App;