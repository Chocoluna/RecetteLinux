import { AppBar, Avatar, Button, ButtonGroup, FormControlLabel, FormGroup, Grid, IconButton, Switch, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Item, Row } from '@mui-treasury/components/flex';
import React from 'react';
import { setProfil } from '../index';
import { FiMoon, FiSun } from "react-icons/fi";
import chefhat from '../assets/chef-hat.png';
import coin from '../assets/coin.png';
import { GetPlayer, SetSignInSide } from '../index';
import { setTheme } from '../theme';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  menuButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: '10%',
    },
  },
  title: {
    flexGrow: 1,
  },

  Button:{
    fontFamily: 'Barlow, san-serif',
    fontSize: '200%',
    fontWeight: 'bold',
    width: '40%',
    height: '15%',
    padding: '0 30px',
    display : 'flex',
    
  },

}));

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

function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const displayProfil = () => {
    setProfil();
  }

  let player = GetPlayer();
  let name = player.pseudos;
  let src = player.avatar;
  let score = player.score;

  const handleChange = (event) => {
    setAuth(event.target.checked);
    setTheme();
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <div className={classes.root}>
      <AppBar position="relative" style={{backgroundColor: '#000051'}}>
        <Toolbar>
          {
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          }
          <Button ><img src={chefhat} onClick={SetSignInSide} alt="Logo appli" height="45vh" /></Button>
          <ButtonGroup variant="text"  aria-label="text primary button group" aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
            className={classes.Button}>
              <Button onClick={displayProfil}>
                <Row nowrap gap={1} p={1}>
                  <Item>
                    <Avatar src={src} />
                  </Item>
                  <Row nowrap grow gap={2} minWidth={0} >
                    <Item grow minWidth={0}>
                      <div>{name}</div>
                    </Item>
                    <Item>
                      <div>{score}</div>
                    </Item>
                  </Row>
                </Row>
              </Button>
            <Button><img src={coin} alt="Coins" height="40vh" /></Button>
            <Button> About Us </Button>
            <Button> Help </Button>
          </ButtonGroup>
          <Grid container justifyContent="flex-end">
           <FormGroup>
             <FormControlLabel edge = "end"
               control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" style={{color: '#ffffcf'}} />}
               label={auth ? <FiMoon/> : <FiSun />}
             />
           </FormGroup>
           </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );

}

export default MenuAppBar;