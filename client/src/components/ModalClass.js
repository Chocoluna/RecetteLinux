import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import React from 'react';
//CSS
import '../css/App.css';
import { useStylesDark, useStylesLight } from '../css/ProfilStyle';
import { GetCours } from '../index';
import { getTheme } from '../theme';

export function ChangeThemeModalClass(){
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


function Row(props) {
  const { cours } = props;
  const [open, setOpen] = React.useState(false);
  console.log(cours)

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" width={window.innerWidth*0.5}>
          {cours.titre}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
          <Box
                mb={2}
                display="flex"
                flexDirection="column"
                // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
                height= {window.innerHeight*0.4}
                style={{
                overflow: "hidden",
                overflowY: "scroll" // added scroll
              }}
            >
              <Typography variant="h6" gutterBottom component="div">
                {cours.sousTitre}
              </Typography>
              <Typography>
                {cours.contenu}
              </Typography>
              <Typography>
                { cours.points.map((elem) => (
                  
                    <Typography><br/>- {elem.point}</Typography>
                  ))}
              </Typography>
              <Typography><br/>
                {cours.lien}
              </Typography>
              <Typography><br/>
                {cours.conclusion}
              </Typography>

            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


function DisplayClass(){
    const avatarStyles = useDynamicAvatarStyles({ size: 90 });
    
    light = useStylesLight();
    dark = useStylesDark();
    ChangeThemeModalClass();

    let cours = GetCours();
    
    return (
      <TableContainer component={Paper} >
      <Table aria-label="collapsible table" sx={{minwidth: 500}}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Cours</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {cours.map((cours) => (
            <Row key={cours.titre} cours={cours} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
}

export default DisplayClass;