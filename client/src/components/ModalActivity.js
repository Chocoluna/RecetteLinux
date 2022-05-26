import * as React from 'react';
import { Button } from '@material-ui/core';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {Quizzfacile} from '../BDD/Questions.json';
import { GetRecette, SetRecette, GetPlayer, SetPlayer } from '../index';
import { PersonItem } from '../index';
//CSS
import { useStylesDark, useStylesLight } from '../css/AppStyle';
import { getTheme } from '../theme';

export function ChangeThemeModalActivity(){
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

export function RightAlert() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="outlined" severity="success">
        This is a success alert — check it out!
      </Alert>
    </Stack>
  );
}

export function Activity(){
    light = useStylesLight();
    dark = useStylesDark();
    ChangeThemeModalActivity();

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
        setHelperText('You got it!');
        setError(false);
        addIngredient(nomIngredient);
        addScore(newScore);
        RightAlert()
        status = true;
        console.log(status);

      } else {
        setHelperText('Sorry, wrong answer!');
        setError(true);
      } 
    };

    return(
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
            
    );
}

export default Activity;