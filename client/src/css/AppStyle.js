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

    modalQuizz: {
      width: '50%',
      height: '80%',
      flexGrow: 1,
      minWidth: 250,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 8px 16px 0 #BDC9D7',
      background:'rgba(240, 240, 240, 0.98)',
      borderRadius: 16,
      position: 'absolute',
      transform: 'translate(48%, 15%)',
    },

    inModal:{
      margin: 3,
      color:'black'
    },
  
    modalBook: {
      width: '23%',
      height: '80%',
      flexGrow: 1,
      minWidth: 250,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      boxShadow: '0 8px 16px 0 #BDC9D7',
      background:'rgba(240, 240, 240, 0.98)',
      color: 'white',
      borderRadius: 16,
      position: 'absolute',
      transform: 'translate(5%, 15%)',
    },
  
  buttonClose : {
    position:'absolute',
    top: 0,
    right:0
  },

  BtnMots : {
    fontSize: '90%',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #81E6B8, #36d78d, #03a45a, #01522d)',
    justifyContent: 'center',
    borderRadius: 6,
    border: 0,
    width: '100%',
    height: '50px',
    boxShadow: '0 3px 5px 2px rgba(155, 235, 135, 0.3)',
  },

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

  modalQuizz: {
    width: '50%',
    height: '80%',
    flexGrow: 1,
    minWidth: 250,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 16px 0 #BDC9D7',
    background:'rgba(40, 40, 160, 0.99)',
    color: 'white',
    borderRadius: 16,
    position: 'absolute',
    transform: 'translate(48%, 15%)',
  },

  inModal:{
    color: 'white !important',
    fontColor:'white',
    margin: 3,
  },

  modalBook: {
    width: '23%',
    height: '80%',
    flexGrow: 1,
    minWidth: 250,
    display: 'flex',
    padding: '3vh',
    alignItems: 'center',
    justifyContent: 'flex-start',
    boxShadow: '0 8px 16px 0 #BDC9D7',
    background:'rgba(40, 40, 160, 0.99)',
    color: 'white',
    borderRadius: 16,
    position: 'absolute',
    transform: 'translate(5%, 15%)',
  },

  buttonClose : {
    position:'absolute',
    top: '0',
    right:'0'
  },

  BtnMots : {
    fontSize: '90%',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #81E6B8, #36d78d, #03a45a, #01522d)',
    justifyContent: 'center',
    borderRadius: 6,
    border: 0,
    width: '100%',
    height: '50px',
    boxShadow: '0 3px 5px 2px rgba(155, 235, 135, 0.3)',
  },

}));