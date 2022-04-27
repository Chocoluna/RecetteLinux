import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './pages/App';
import SignInside from './pages/SignInside';
import reportWebVitals from './reportWebVitals';

var etatjeu;

var player = {
  pseudos: "",
  avatar: null,
  score: 0,
};

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SignInside/>
  </React.StrictMode>
);*/


////////////////////////////////////////////////////////////
//                  RENDER DES PAGES
////////////////////////////////////////////////////////////

//Render de la page d'accueil
export function SetSignInSide(){
  ReactDOM.render(
    <React.StrictMode>
    <SignInside/>
    </React.StrictMode>,
    document.getElementById('root')
  );
  etatjeu="sign";
}
SetSignInSide();

export function setApp(){
  ReactDOM.render(
  <React.StrictMode>
  <App/>
  </React.StrictMode>,
  document.getElementById('root')
  );
  etatjeu="App";
}

////////////////////////////////////////////////////////////
//                    GETTER et SETTER
///////////////////////////////////////////////////////////

//Modifie le joueur
export function SetPlayer(playerInfo){
  player = playerInfo;
}

//Retourne le joueur
export function GetPlayer(){
  return player;
}

//Retourne l'état du jeu
export function Getetat(){
  return etatjeu;
}

////////////////////////////////////////////////////////////
//             Ecoute sur la touche entrée
////////////////////////////////////////////////////////////

/*document.addEventListener('keydown', function(event) {
  if ((etatjeu == "sign") && (event.key === 'Enter') && (document.getElementById("pseudos").value != "")){
    player.pseudos = document.getElementById("pseudos").value;
    SetPlayer(player);
    AddInTab(player);
    SetWaiting(); 
});*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();