import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { Getetat, SetSignInSide } from './index';
import { ChangeThemeSign } from './pages/SignInside';

var theme = "dark";

export function setTheme(){
  var etatjeu = Getetat();

  ////////////////////////////////////////////////////////
  //                    LIGHT THEME
  if(theme === "light"){
    theme = "dark";

    if(etatjeu === "sign"){
      ChangeThemeSign();
      SetSignInSide();
    }

    if(etatjeu === "Jeu"){
     // ChangeThemeApp();
      ReactDOM.render(
      <React.StrictMode>
      <App/>
      </React.StrictMode>,
      document.getElementById('root'),
      );
    }

  }
  ////////////////////////////////////////////////////////
  //                  DARK THEME
  else {
    theme = "light";

    if(etatjeu === "sign"){
      ChangeThemeSign();
      SetSignInSide();
    }

    if(etatjeu === "Jeu"){
    //  ChangeThemeApp();
      ReactDOM.render(
      <React.StrictMode>
      <App/>
      </React.StrictMode>,
      document.getElementById('root'),
      );
    }
  }
}

export function getTheme(){
  return theme;
}