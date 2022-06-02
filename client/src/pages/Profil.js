import { Button, CssBaseline, Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { Column, Item, Row } from '@mui-treasury/components/flex';
import {
  Info, InfoSubtitle, InfoTitle, InfoCaption
} from '@mui-treasury/components/info';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import { useD01InfoStyles } from '@mui-treasury/styles/info/d01';
import Modal from '@mui/material/Modal';
import React, { useState } from 'react';
import cross from '../assets/cross.png';
import DisplayCompetence from '../components/Compétences';
import MenuAppBar from '../components/Header';
import {getCurrentLevel} from '../pages/App';
//CSS
import { useStylesDark, useStylesLight } from '../css/ProfilStyle';
import { GetPlayer, setApp } from '../index';
import { getTheme } from '../theme';

export function ChangeThemeProfil(){
  var theme = getTheme();

  if(theme === "light") {
    classes = light;

  }
  else {
    classes = dark;

  }
}

var light;
var dark;
var classes;


function Profil() {
  const avatarStyles = useDynamicAvatarStyles({ size: 90 });

  light = useStylesLight();
  dark = useStylesDark();
  ChangeThemeProfil();

  let player = GetPlayer();
  let name = player.pseudos;
  let src = player.avatar;
  let score = player.score;
  let level = getCurrentLevel();

  const [openModalProfil, setOpenProfil] = useState(true);
  const handleOpenProfil = (elem) => { setOpenProfil(true); };
  const handleCloseProfil = () => { setOpenProfil(false); setApp(); };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MenuAppBar />
      <Modal
        open={openModalProfil}
        onClose={handleCloseProfil}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={classes.modal}
      >
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
        >
        <Column p={0} gap={3} >
            <Row >
              <Item >
                <Avatar
                  variant={'rounded'}
                  classes={avatarStyles}
                  src={src}
                />
              </Item>
              <Info useStyles={useD01InfoStyles} width="40vw">
                <InfoTitle >{name}</InfoTitle>
                <InfoSubtitle>niveau {level}</InfoSubtitle>
                <InfoCaption>{score} pièces d'or</InfoCaption>
              </Info>
              <Grid container justifyContent="flex-end">
                <Button onClick={handleCloseProfil}><img src={cross} alt="Close" height="40vh" /></Button>
              </Grid>
            </Row>
          </Column>
          <Row>
            <DisplayCompetence/>
          </Row>
        </Grid>
      </Modal>
    </div>
    );
  }

export default Profil;