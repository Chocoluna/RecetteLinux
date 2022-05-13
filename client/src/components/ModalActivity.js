import { Button } from '@material-ui/core';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import * as React from 'react';
import {Quizzfacile} from '../BDD/Questions.json';
//CSS
import '../css/App.css';
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
  let prop1;
  let prop2;
  
export function loadQuestionData(nomIngr){
  console.log(nomIngr)
  
  let question = Quizzfacile.find(x => x.name === nomIngr);
  console.log(question)
    text = question.text
    rep = question.rep
    prop1 = question.prop1
    prop2 = question.prop2
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
  
      if (value === 'best') {
        setHelperText('You got it!');
        setError(false);
      } else if ((value === 'worst')||(value === 'bad')) {
        setHelperText('Sorry, wrong answer!');
        setError(true);
      } else {
        setHelperText('Please select an option.');
        setError(true);
      }
    };

    return(
      <form onSubmit={handleSubmit}>
        <FormControl sx={{ m: 3 }} error={error} variant="standard">
          <FormLabel id="demo-error-radios">{text}</FormLabel>
          <RadioGroup
            aria-labelledby="demo-error-radios"
            name="quiz"
            value={value}
            onChange={handleRadioChange}
          >
            <FormControlLabel value="best" control={<Radio />} label={rep} />
            <FormControlLabel value="worst" control={<Radio />} label={prop1} />
            <FormControlLabel value="bad" control={<Radio />} label={prop2} />
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
          <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
            Check Answer
          </Button>
        </FormControl>
      </form>
            
    );
}

export default Activity;