import React, { useState } from 'react';
import { Button, CssBaseline } from '@material-ui/core';
import { Row, Column, Item } from '@mui-treasury/components/flex';
import Avatar from '@material-ui/core/Avatar';
import MenuAppBar from '../components/Header';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Image, Layer, Stage } from 'react-konva';
import useImage from 'use-image';
import {
    Info,
    InfoTitle,
    InfoSubtitle,
    InfoCaption,
  } from '@mui-treasury/components/info';
  import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
  import { useD01InfoStyles } from '@mui-treasury/styles/info/d01';
  import {Recette} from '../BDD/Recette.json';
//CSS
import '../css/App.css';
import { useStylesDark, useStylesLight } from '../css/ProfilStyle';
import { getTheme } from '../theme';

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

function DisplayClass(){
    const avatarStyles = useDynamicAvatarStyles({ size: 90 });
    light = useStylesLight();
    dark = useStylesDark();
    ChangeThemeModalRecipe();

    return (
        <Column p={0} gap={2} >
            { Recette.map(elem =>
            <Row mt={2}>
            <Item>
                <Avatar
                variant={'rounded'}
                classes={avatarStyles}
                src={elem.IlluRecette}
                />
            </Item>
            <Info useStyles={useD01InfoStyles}>
                <InfoTitle>{elem.NomRecette}</InfoTitle>
                {elem.Ingredients.map(ingr => 
                <InfoSubtitle>{ingr.nb} {ingr.Ingredient}</InfoSubtitle>
                )}
            </Info>
            </Row>)}
        </Column>
    );
}

export default DisplayClass;