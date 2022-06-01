import Avatar from '@material-ui/core/Avatar';
import { Column, Item, Row } from '@mui-treasury/components/flex';
import {
  Info, InfoSubtitle, InfoTitle
} from '@mui-treasury/components/info';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import { useD01InfoStyles } from '@mui-treasury/styles/info/d01';
import React from 'react';
import { GetRecette } from '../index';
//CSS
import '../css/App.css';
import { useStylesDark, useStylesLight } from '../css/ProfilStyle';
import { getTheme } from '../theme';
import { getCurrentLevel } from '../pages/App';

export function ChangeThemeModalRecipe(){
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

var light;
var dark;
var classes;
var styles;

function DisplayRecipe(){
    const avatarStyles = useDynamicAvatarStyles({ size: 90 });
    light = useStylesLight();
    dark = useStylesDark();
    ChangeThemeModalRecipe();

    let recette = GetRecette();

    let illuRecette = "https://raw.githubusercontent.com/Chocoluna/RecetteLinux/main/client/src/assets/recipes%20(1).png"
    let illuRecetteTrue = "https://raw.githubusercontent.com/Chocoluna/RecetteLinux/main/client/src/assets/recipes.png"

    let i = 0;
    let currentLevel = getCurrentLevel();
    const image = () => { 
      console.log(i, )
      if(i<= currentLevel){
        i++
        return illuRecetteTrue
      }
      i++
      return illuRecette;
    }

    return (
        <Column p={0} gap={2} >
            { recette.map(elem =>
            <Row mt={2}>
            <Item>
                <Avatar
                variant={'rounded'}
                classes={avatarStyles}
                src={image()}
                />
            </Item>
            <Info useStyles={useD01InfoStyles}>
                <InfoTitle>{elem.NomRecette}</InfoTitle>
                {elem.Ingredients.map(ingr => 
                <InfoSubtitle>{ingr.nb} / {ingr.nbTotal} {ingr.Ingredient}</InfoSubtitle>
                )}
            </Info>
            </Row>)}
        </Column>
    );
}

export default DisplayRecipe;