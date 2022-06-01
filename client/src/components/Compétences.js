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
import CircularProgress from '@mui/material/CircularProgress';
import { getQuestTrue } from '../index';
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
        <TableCell component="th" scope="row" width={window.innerWidth*0.4}>
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
    let nbTrue = getQuestTrue();

    
    return (
      <TableContainer component={Paper}>
      <Table aria-label="collapsible table" margin>
        <TableHead >
          <TableRow>
            <TableCell />
            <TableCell>Compétences</TableCell>
            <TableCell>          
              <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress className="minuteur" variant="determinate" value={nbTrue} />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    variant="caption"
                    component="div"
                    color="text.secondary"
                  >{`${Math.round(nbTrue)}%`}</Typography>
                </Box>
              </Box>
            </TableCell>
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