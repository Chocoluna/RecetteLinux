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
import { useStylesDark, useStylesLight } from '../css/ProfilStyle';
import { GetComp } from '../index';
import { getTheme } from '../theme';

export function ChangeThemeCompetence(){
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

function Row(props) {
  const { comp } = props;
  const [open, setOpen] = React.useState(false);

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
        <TableCell component="th" scope="row">
          {comp.titre}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
                {comp.tab.map(co => 
              <Typography variant="h6" gutterBottom component="div">
                {co.competence}
              </Typography>)}
              
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function DisplayCompetence(){
    const avatarStyles = useDynamicAvatarStyles({ size: 90 });
    
    light = useStylesLight();
    dark = useStylesDark();
    ChangeThemeCompetence();

    let comp = GetComp();
    
    return (
      <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Compétences</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {comp.map((comp) => (
            <Row key={comp.titre} comp={comp} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
}

export default DisplayCompetence;