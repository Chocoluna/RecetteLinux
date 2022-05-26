import React, { useState } from 'react';
import swal from 'sweetalert';
import { Button, CssBaseline } from '@material-ui/core';
import MenuAppBar from '../components/Header';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Activity from '../components/ModalActivity';
import DisplayRecipe from '../components/ModalRecipe';
import DisplayClass from '../components/ModalClass';
import Typography from '@mui/material/Typography';
import { Image, Layer, Stage } from 'react-konva';
import useImage from 'use-image';
import {Level1, Level2} from '../BDD/Item.json';
import { GetRecette, SetRecette, GetPlayer, SetPlayer } from '../index';
import {Quizzfacile} from '../BDD/Questions.json';
//formulaire
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
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

  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');
 
  const handleRadioChange = (event) => {
    setValue((event.target).value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === rep) {
      setError(false);
      addIngredient(nomIngredient);
      addScore(newScore);
      swal({
        title: "Bonne réponse",
        text: "Tu as gagné un ingrédient et 5 pièces d'or!",
        icon: "success",
        button: "ok",
      });
      status = true;
      console.log(status);

    } else {
      setError(true);
      swal({
        title: "Mauvais réponse",
        text: "You clicked the button!",
        icon: "error",
        button: "ok",
      });
    } 
    handleCloseActivity();
  };

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
            <form onSubmit={handleSubmit} >
              <FormControl sx={{m: 3}} error={error} variant="standard">
                <FormLabel id="demo-error-radios" className={classes.inModal}>{text}</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-error-radios"
                  name="quiz"
                  value={value}
                  onChange={handleRadioChange}
                >
                  { tabQuest.map(elem => 
                    <FormControlLabel value={elem} control={<Radio className={classes.inModal} />} label={elem} />
                    )}
                </RadioGroup>
                <FormHelperText>{helperText}</FormHelperText>
                <Button className={classes.BtnMots} type="submit" variant="outlined">
                  Valider mes réponses
                </Button>
              </FormControl>
            </form>
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

////////////////////////////////////////////
//////////////Fonctions Activity///////////
///////////////////////////////////////////
let text;
let rep;
let status;
let nomIngredient = "";
let newScore = "";
let tabQuest = [];

export function loadQuestionData(nomIngr){
console.log(nomIngr)

let question = Quizzfacile.find(x => x.name === nomIngr);
console.log(question)
  text = question.text
  rep = question.rep
  status = question.status
  nomIngredient = nomIngr
  tabQuest = []
  tabQuest.push(question.prop1, question.prop2, question.rep) 
  tabQuest = shuffle(tabQuest);
}

function shuffle(array) {
let currentIndex = array.length,  randomIndex;

// While there remain elements to shuffle.
while (currentIndex != 0) {

  // Pick a remaining element.
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex--;

  // And swap it with the current element.
  [array[currentIndex], array[randomIndex]] = [
    array[randomIndex], array[currentIndex]];
}

return array;
}

//incrémente le nombre d'ingrédients gagnés
export function addIngredient(nomIngr){
console.log(nomIngr);
let recettes = GetRecette();
recettes.forEach(recette => {
  let tmp = recette.Ingredients.find(x => x.Ingredient === nomIngr);
  if(tmp){
    tmp.nb++;
  }
});
SetRecette(recettes);  
}

//incrémente le score (=pièces d'or)
export function addScore(newScore){
let player = GetPlayer();
let score = player.score;
console.log(player.score);
player.score = score + 5;
console.log(player.score);
SetPlayer(player);
}


export default App;

