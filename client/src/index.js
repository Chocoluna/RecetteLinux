import { Avatar } from '@material-ui/core';
import { Item, Row } from '@mui-treasury/components/flex';
import React from 'react';
import ReactDOM from 'react-dom';
import { Recette } from './BDD/Recette.json';
import { Cours } from './BDD/Cours.json';
import { Competences } from './BDD/Competences.json';
import './css/index.css';
import App from './pages/App';
import Profil from './pages/Profil';
import SignInside from './pages/SignInside';
import reportWebVitals from './reportWebVitals';
import coin from './assets/coin.png';

var etatjeu;
let recette = Recette;
let cours = Cours;
let comp = Competences;
let nbMaxQuest = 25;
let nbQuestTrue = 0;

var player = {
  pseudos: "",
  avatar: null,
  score: 0,
  img: null
};

export const PersonItem = ({ src, name, score, img}) => {
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
        <Item>
          <img src={img}/>
        </Item>
      </Row>
    </Row>
  );
};

export function incrementQuestTrue(){
  nbQuestTrue++;
}

export function getQuestTrue(){
  return (nbQuestTrue / nbMaxQuest)*100;
}


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

export function setProfil(){
  ReactDOM.render(
    <React.StrictMode>
      <Profil/>
    </React.StrictMode>,
    document.getElementById('root')
    );
    etatjeu="Profil";
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

//Modifie le tableau de recettes
export function SetRecette(recetteInfo){
  recette = recetteInfo;
}

//Retourne le tableau de recette
export function GetRecette(){
  return recette;
}

//Modifie le tableau de cours
export function SetCours(coursInfo){
  cours = coursInfo;
}

//Retourne le tableau de cours
export function GetCours(){
  console.log(cours);
  return cours;
}

//Modifie le tableau de cours
export function SetComp(compInfo){
  comp = compInfo;
}

//Retourne le tableau de cours
export function GetComp(){
  console.log(comp);
  return comp;
}

////////////////////////////////////////////////////////////
//             Ecoute sur la touche entrée
////////////////////////////////////////////////////////////

document.addEventListener('keydown', function(event) {
  if ((etatjeu === "sign") && (event.key === 'Enter') && (document.getElementById("pseudos").value !== "")){
    player.pseudos = document.getElementById("pseudos").value;
    SetPlayer(player);
    setApp(); 
 }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();