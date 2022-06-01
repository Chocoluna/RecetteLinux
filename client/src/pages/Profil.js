import { Button, CssBaseline } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { Column, Item, Row } from '@mui-treasury/components/flex';
import { Grid } from '@material-ui/core';
import {
  Info, InfoSubtitle, InfoTitle
} from '@mui-treasury/components/info';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import { useD01InfoStyles } from '@mui-treasury/styles/info/d01';
import Modal from '@mui/material/Modal';
import React, { useState } from 'react';
import cross from '../assets/cross.png';
import MenuAppBar from '../components/Header';
import { GetCours } from '../index';
import DisplayCompetence from '../components/Compétences';
//CSS
import { useStylesDark, useStylesLight } from '../css/ProfilStyle';
import { GetPlayer, setApp } from '../index';
import { getTheme } from '../theme';

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
        className={classes.modal}
      >
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
        >
        <Column p={0} gap={2}>
            <Row columns={{ xs: 4, sm: 8, md: 12 }}>
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