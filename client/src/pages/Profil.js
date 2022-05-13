import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Card from '@mui/material/Card';
import { Button, CssBaseline } from '@material-ui/core';
import MenuAppBar from '../components/Header';
import { GetPlayer } from '../index';
import Modal from '@mui/material/Modal';
import {setApp} from '../index';
import { Row, Column, Item } from '@mui-treasury/components/flex';
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
import { useStylesDark, useStylesLight } from '../css/ProfilStyle';
import { getTheme } from '../theme';
import cross from '../assets/cross.png';

export const PersonItem = ({ src, name, score}) => {
  return (
    <Row gap={1} p={1}>
      <Item>
        <Avatar src={src} />
      </Item>
      <Row wrap grow gap={0.5} minWidth={0}>
        <Item grow minWidth={0}>
          <div>{name}</div>
        </Item>
        <Item>
          <div>{score}</div>
        </Item>
      </Row>
    </Row>
  );
};

export function ChangeThemeProfil(){
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

function Profil() {
  const avatarStyles = useDynamicAvatarStyles({ size: 90 });

  light = useStylesLight();
  dark = useStylesDark();
  ChangeThemeProfil();

  let player = GetPlayer();
  let name = player.pseudos;
  let src = player.avatar;
  let score = player.score;

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
        className={classes.modalQuizz}
      >
      <Column p={0} gap={2} className={classes.modal}>
          <Row >
            <Item>
              <Avatar
                variant={'rounded'}
                classes={avatarStyles}
                src={src}
              />
            </Item>
            <Info useStyles={useD01InfoStyles}>
              <InfoTitle >{name}</InfoTitle>
              <InfoSubtitle>{score}</InfoSubtitle>
            </Info>
            <Button onClick={handleCloseProfil}><img src={cross} alt="Close" height="40vh" /></Button>
          </Row>
        </Column>
        </Modal>
    </div>
    );
  }

export default Profil;