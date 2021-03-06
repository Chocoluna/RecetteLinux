import { TextField } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

/*
███████ ████████ ██    ██ ██      ███████ 
██         ██     ██  ██  ██      ██      
███████    ██      ████   ██      █████ 
     ██    ██       ██    ██      ██    
███████    ██       ██    ███████ ███████ */

export const ValidationTextField = withStyles({
root: {
  '& input:valid + fieldset': {
    borderColor: 'green',
    borderWidth: 2,
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
    borderWidth: 2,
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 6,
    padding: '4px !important', // override inline-style
  },
},
})(TextField);

export const useStylesLight = makeStyles((theme) => ({

  image: {
    height: '93.1vh',
    backgroundImage: 'url(https://source.unsplash.com/collection/24051068/)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  paper: {
    margin: theme.spacing(6, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  form: {
    width: '80%', // Fix IE 11 issue.
    margin: theme.spacing(2),
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    width: '35%',
    height: '30%',
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

  card: {
    width: '92%',
    height : '92%',
    borderRadius: 16,
    boxShadow: '0 8px 16px 0 #BDC9D7',
    overflow: 'hidden',
    position: 'relative',
    top:"50%",
    left:"50%",
    transform: 'translate(-50%, -50%)'
  },

  avatarchoice: {
      display: 'flex',
      '& > *': {
      margin: theme.spacing(1),
      },
    },
    medium: {
      width: '25vw',
      height: '25vw',
    },
    large: {
      width: '13vw',
      height: '13vw',
    },

    copyright: {
      fontFamily: 'Barlow, san-serif',
      color: 'white',
      margin: theme.spacing (3, 2),
    },
}));

/*
██████   █████  ██████  ██   ██     ████████ ██   ██ ███████ ███    ███ ███████ 
██   ██ ██   ██ ██   ██ ██  ██         ██    ██   ██ ██      ████  ████ ██      
██   ██ ███████ ██████  █████          ██    ███████ █████   ██ ████ ██ █████ 
██   ██ ██   ██ ██   ██ ██  ██         ██    ██   ██ ██      ██  ██  ██ ██    
██████  ██   ██ ██   ██ ██   ██        ██    ██   ██ ███████ ██      ██ ███████ */

export const useStylesDark = makeStyles((theme) => ({

  image: {
    height: '93.1vh',
    backgroundImage: 'url(https://source.unsplash.com/collection/31854366/)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  paper: {
    margin: theme.spacing(6, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  form: {
    width: '80%', // Fix IE 11 issue.
    margin: theme.spacing(2),
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    width: '35%',
    height: '30%',
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

  card: {
    width: '92%',
    height : '92%',
    borderRadius: 16,
    boxShadow: '0 8px 16px 0 #BDC9D7',
    overflow: 'hidden',
    position: 'relative',
    top:"50%",
    left:"50%",
    transform: 'translate(-50%, -50%)'
  },

  avatarchoice: {
      display: 'flex',
      '& > *': {
      margin: theme.spacing(1),
      },
    },
    medium: {
      width: '25vw',
      height: '25vw',
    },
    large: {
      width: '13vw',
      height: '13vw',
    },

    copyright: {
      fontFamily: 'Barlow, san-serif',
      color: 'white',
      margin: theme.spacing (3, 2),
    },
}));