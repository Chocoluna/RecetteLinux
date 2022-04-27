import { makeStyles } from '@material-ui/core/styles';
import { autocompleteClasses } from '@mui/material';
/*
███████ ████████ ██    ██ ██      ███████ 
██         ██     ██  ██  ██      ██      
███████    ██      ████   ██      █████ 
     ██    ██       ██    ██      ██    
███████    ██       ██    ███████ ███████ */

export const useStylesLight = makeStyles((theme) => ({
  root: {
    height: '100vh',
    overflow: 'hidden',
    backgroundImage: 'url(https://source.unsplash.com/collection/24051068/)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  center:{
    width: '50%',
    margin: theme.spacing('auto', 'auto'),
    },

    minuteurbox:{
    width: '100%',
    height: '100%',
    background:'rgba(240, 160, 240, 0.30)',
    margin: theme.spacing(5, 0),
    borderRadius: 16,
  },

  minuteur:{
    color: "#0d47a1",
    margin: theme.spacing(0, 5),
  },

  paper: {
    margin: theme.spacing(7.5, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  canvas: {
    backgroundColor: 'rgb(255, 255, 255)',
    background: 'white',
    borderRadius: 15,
    display: 'flex',

  },

  drawbox:{
    width: "100%",
  },

  couleurs: {
    margin: theme.spacing(8, 0),
    borderRadius: 15,
    width: '5.5vh',
    height:'65vh',
    border: '3px solid black',
    background:'#222',
    borderRadius: 5,
    padding:'1vh',
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  headline: {
    color: '#122740',
    fontSize: '2.5rem',
    fontWeight: 600,
    align: 'center',
  },

  header: {
    fontFamily: 'Barlow, san-serif',
    backgroundColor: '#fff',
  },

  cardjoueur: {
    width: '100%',
    height: '75%',
    borderRadius: 16,
    boxShadow: '0 8px 16px 0 #BDC9D7',
    overflow: 'hidden',
    fontSize: '1.5rem',
    fontWeight: 600,
    flexWrap: 'wrap',
    margin : theme.spacing (8, 2),
    background:'rgba(240, 160, 240, 0.30)',
  },

  cardchat: {
    margin: theme.spacing(8, 2),
    width: '90%',
    height: '80%',
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 8px 16px 0 #BDC9D7',
    overflow: 'hidden',
    background:'rgba(240, 160, 240, 0.30)',
    overflow: 'auto',
    fontSize: '1.25rem',
    fontWeight: 450,
  },

  chatbox: {
    margin: theme.spacing(1),
    width: '97%',
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1.25rem',
    fontWeight: 400,
    position: 'relative',
    overflow: 'auto',
    '&:hover': {
      overflowY: 'auto',
    },
  },

  styleB: {
      color: 'white',
      fontSize: '150%',
      borderRadius: 15,
      textAlign: 'center',
      width: '5.5vh',
      height:'5.5vh',
      border: '3px solid black',
      background:'#222',
      borderRadius: 5,
      marginTop: '0.5vh',
      marginLeft: '1vh',
  },

  tresgrand: {
    fontSize: '150%',
  },
  grand: {
    fontSize: '100%',
  },
  moyen: {
    fontSize: '75%',
  },
  petit: {
    fontSize: '50%',
  },

  avatarchoice: {
      display: 'flex',
      '& > *': {
      margin: theme.spacing(1),
      },
    },
    medium: {
      width: '50%',
      height: '70%',
    },
    large: {
      width: '23%',
      height: '80%',
    },

  modal: {
    width: '55%',
    height: '80%',
    flexGrow: 1,
    minWidth: 250,
    display: 'flex',
    padding: '10vh',
    margin: '15vh',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 16px 0 #BDC9D7',
    background:'rgba(240, 240, 240, 0.98)',
    borderRadius: 16,
    marginTop: '10vh',
  },

  type_msg : {
      borderRadius: 16,
      background:'#222',
      color: "white",
      width : "90%",
      height: "4vh",
  },

  send_btn : {
      borderRadius: 16,
      background:'#222',
      color: "white",
      width : "4vh",
  },

  BtnMots : {
    fontSize: '90%',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #81E6B8, #36d78d, #03a45a, #01522d)',
    justifyContent: 'center',
    borderRadius: 6,
    border: 0,
    width: '25vw',
    height: '5vh',
    margin : '5vh',
    boxShadow: '0 3px 5px 2px rgba(155, 235, 135, 0.3)',
  },

  motChoisi : {
    fontSize: '120%',
    fontWeight: 600,
    margin: theme.spacing('auto', 1),
  }

}));
/*
██████   █████  ██████  ██   ██     ████████ ██   ██ ███████ ███    ███ ███████ 
██   ██ ██   ██ ██   ██ ██  ██         ██    ██   ██ ██      ████  ████ ██      
██   ██ ███████ ██████  █████          ██    ███████ █████   ██ ████ ██ █████ 
██   ██ ██   ██ ██   ██ ██  ██         ██    ██   ██ ██      ██  ██  ██ ██    
██████  ██   ██ ██   ██ ██   ██        ██    ██   ██ ███████ ██      ██ ███████ */

export const useStylesDark = makeStyles((theme) => ({
  root: {
    height: '100vh',
    overflow : 'hidden',
    backgroundImage: 'url(https://source.unsplash.com/collection/31854366/)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  center:{
    width: '50%',
    margin: theme.spacing('auto', 'auto'),
    },

  minuteurbox:{
    width: '100%',
    height: '100%',
    background:'rgba(74, 20, 140, 0.50)',
    margin: theme.spacing(5, 0),
    borderRadius: 16,
  },

  minuteur:{
    color: "#64b5f6",
    margin: theme.spacing(0, 5),
  },

  paper: {
    margin: theme.spacing(7.5, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  canvas: {
    backgroundColor: 'rgb(255, 255, 255)',
    background: 'white',
    borderRadius: 15,
    display: 'flex',
  },

  drawbox:{
    width: "100%",
  },

  couleurs: {
    margin: theme.spacing(8, 0),
    borderRadius: 15,
    width: '5.5vh',
    height:'65vh',
    border: '3px solid black',
    background:'#222',
    borderRadius: 5,
    padding:'1vh',
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  headline: {
    color: '#122740',
    fontSize: '2.5rem',
    fontWeight: 600,
    align: 'center',
  },

  header: {
    fontFamily: 'Barlow, san-serif',
    backgroundColor: '#fff',
  },

  cardjoueur: {
    width: '100%',
    height: '75%',
    borderRadius: 16,
    boxShadow: '0 8px 16px 0 #BDC9D7',
    overflow: 'hidden',
    fontSize: '1.5rem',
    fontWeight: 600,
    flexWrap: 'wrap',
    margin : theme.spacing (8, 2),
    background:'rgba(74, 20, 140, 0.50)',
    color: '#FFFFFF',

  },

  cardchat: {
    margin: theme.spacing(8, 2),
    width: '90%',
    height: '80%',
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 8px 16px 0 #BDC9D7',
    overflow: 'hidden',
    background:'rgba(74, 20, 140, 0.50)',
    overflow: 'auto',
    fontSize: '1.25rem',
    fontWeight: 400,
    color: '#FFFFFF',
  },

  chatbox: {
    margin: theme.spacing(1),
    width: '97%',
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1.25rem',
    fontWeight: 400,
    position: 'relative',
    overflow: 'auto',
    '&:hover': {
      overflowY: 'auto',
    },
  },

  styleB: {
      color: 'white',
      fontSize: '150%',
      borderRadius: 15,
      textAlign: 'bottom',
      width: '5.5vh',
      height:'5.5vh',
      border: '3px solid green',
      background:'#222',
      borderRadius: 5,
  },

  tresgrand: {
    fontSize: '150%',
  },
  grand: {
    fontSize: '100%',
  },
  moyen: {
    fontSize: '75%',
  },
  petit: {
    fontSize: '50%',
  },

  avatarchoice: {
      display: 'flex',
      '& > *': {
      margin: theme.spacing(1),
      },
    },
    medium: {
      width: '50%',
      height: '70%',
    },
    large: {
      width: '23%',
      height: '80%',
    },

  modal: {
    width: '55%',
    height: '80%',
    flexGrow: 1,
    minWidth: 250,
    display: 'flex',
    padding: '10vh',
    margin: '15vh',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 16px 0 #BDC9D7',
    background:'rgba(40, 40, 160, 0.99)',
    color: 'white',
    borderRadius: 16,
    marginTop: '10vh',
  },


  type_msg : {
      borderRadius: 16,
      background:'#222',
      color: "white",
      width : "90%",
      height: "4vh",
  },

  send_btn : {
      borderRadius: 16,
      background:'#222',
      color: "white",
      width : "4vh",
  },

  BtnMots : {
    fontSize: '90%',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #81E6B8, #36d78d, #03a45a, #01522d)',
    justifyContent: 'center',
    borderRadius: 6,
    border: 0,
    width: '25vw',
    height: '5vh',
    margin : '5vh',
    boxShadow: '0 3px 5px 2px rgba(155, 235, 135, 0.3)',
  },

  motChoisi : {
    fontSize: '120%',
    fontWeight: 600,
    color: '#FFFFFF',
    margin: theme.spacing('auto', 1),
  },

}));