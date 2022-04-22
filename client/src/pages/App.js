import logo from '../assets/chocolate-bar.png';
//CSS
import {getTheme, setTheme} from '../theme';
import '../css/App.css';
import MenuAppBar from '../components/Header';
import { Avatar, Button, CssBaseline, Grid, Paper } from '@material-ui/core';
import { Column, Item, Row } from '@mui-treasury/components/flex';


var classes;

function App() {


  return (
      <div className="App">
        <MenuAppBar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    
  );
}

export default App;
