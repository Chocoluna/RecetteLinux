import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import { Button, CssBaseline } from '@material-ui/core';
import MenuAppBar from '../components/Header';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import DisplayRecipe from '../components/ModalRecipe';
import DisplayClass from '../components/ModalClass';
import Typography from '@mui/material/Typography';
import { Image, Layer, Stage } from 'react-konva';
import useImage from 'use-image';
import {Level1, Level2, Level3} from '../BDD/Item.json';
import {trapLevel1, trapLevel2, trapLevel3} from '../BDD/Trap.json';
import { rewardLevel1, rewardLevel2, rewardLevel3 } from '../BDD/Reward.json';
import { GetRecette, SetRecette, GetPlayer, SetPlayer, incrementQuestTrue, setProfil } from '../index';
import {Quizzfacile, QuizzIntermédiaire, Quizzexpert} from '../BDD/Questions.json';
//formulaire
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
//CSS
import '../css/App.css';
import { useStylesDark, useStylesLight } from '../css/AppStyle';
import { getTheme } from '../theme';
import cross from '../assets/cross.png';
import goldpot from '../assets/gold-pot.png';
import cupcake from '../assets/cupcake.png';
import lutin from '../assets/lutin.png';
import coin from '../assets/coin.png';
import rainbow from '../assets/rainbow.png';


export function ChangeThemeApp(){
  let theme = getTheme();

  if(theme === "light") {
    classes = light;
  }
  else {
    classes = dark;
  }
}

let light;
let dark;
let classes;
let levels = [Level1, Level2, Level3];
let levelsTrap = [trapLevel1, trapLevel2, trapLevel3];
let levelsReward = [rewardLevel1, rewardLevel2, rewardLevel3];
let currentLevel = 0;
let currentLevelData = levels[currentLevel];
let currentLevelDataTrap = levelsTrap[currentLevel];
let currentLevelDataReward = levelsReward[currentLevel];
let question;

export function getCurrentLevel(){
  return currentLevel;
}


function App() {
  light = useStylesLight();
  dark = useStylesDark();
  ChangeThemeApp();

  const [openModalIntro, setOpenIntro] = useState(false);
  const handleOpenIntro = () => { setOpenIntro(true); };
  const handleCloseIntro = () => { setOpenIntro(false); };

  const [openModalActivity, setOpenActivity] = useState(false);
  const handleOpenActivity = (elem) => { loadQuestionData(elem) ; if(question) setOpenActivity(true); };
  const handleCloseActivity = () => { setOpenActivity(false); };
  
  const [openModalRecipes, setOpenRecipes] = useState(false);
  const handleOpenRecipes = () => { setOpenRecipes(true); };
  const handleCloseRecipes = () => { setOpenRecipes(false); };

  const [openModalClass, setOpenClass] = useState(false);
  const handleOpenClass = () => { setOpenClass(true); };
  const handleCloseClass = () => { setOpenClass(false); };

  const [openModalTrap, setOpenTrap] = useState(false);
  const handleOpenTrap = () => { setOpenTrap(true); };
  const handleCloseTrap = () => { setOpenTrap(false); };

  
  //charge l'image de fond
  const BackgroundImage = () => {
    const [image] = useImage('https://raw.githubusercontent.com/Chocoluna/RecetteLinux/main/client/src/assets/Kitchen.png');
    return <Image image={image} width={window.innerHeight} height={window.innerHeight} />;
  };

  //charge les tableaux de questions
  const loadQuestionData = (nomIngr) => {
    question = questions[currentLevel].find(x => x.name === nomIngr && x.status === false);
    if(question){
      text = question.text
      rep = question.rep
      idQuest = question.id
      nomIngredient = nomIngr
      tabQuest = []
      tabQuest.push(question.prop1, question.prop2, question.rep) 
      tabQuest = shuffle(tabQuest);
    }else{
      handleCloseActivity();
      swal({
        title: "Tu as cet ingrédient en quantité suffisante!",
        text: "Pars à la recherche de nouveaux ingrédients pour finir ta recette",
        icon: "info",
        button: "ok",
      });
    }
  };

  //charge les ingrédients pour la recette
  const LoadItem = ({elem}) => {
    const [image] = useImage(elem.Image);
    return <Image image={image} width={window.innerHeight*elem.Height} 
              height={window.innerHeight*elem.Height} 
              x={window.innerHeight*elem.PosX} 
              y={window.innerHeight*elem.PosY}
              onClick={() => handleOpenActivity(elem.Nom)}
              style={{cursor:'pointer'}}
              />;
  };

  //charge les ingrédients et objets pièges
  const LoadTrap = ({elem}) => {
    const [image] = useImage(elem.Image);
    return <Image image={image} width={window.innerHeight*elem.Height} 
              height={window.innerHeight*elem.Height} 
              x={window.innerHeight*elem.PosX} 
              y={window.innerHeight*elem.PosY}
              onClick={() => setAlertTrap(elem.Nom)}
              style={{cursor:'pointer'}}
              />;
  };

  //charge les ingrédients et objets récompenses
  const LoadReward = ({elem}) => {
    const [image] = useImage(elem.Image);
    return <Image image={image} width={window.innerHeight*elem.Height} 
              height={window.innerHeight*elem.Height} 
              x={window.innerHeight*elem.PosX} 
              y={window.innerHeight*elem.PosY}
              onClick={() => setAlertReward(elem.Nom) }
              style={{cursor:'pointer'}}
              />;
  };

  //charge les recettes
  const RecipeBook = () => {
    const [image] = useImage('https://raw.githubusercontent.com/Chocoluna/RecetteLinux/main/client/src/assets/book.png');
    return <Image image={image} width={window.innerHeight*0.10} 
              height={window.innerHeight*0.10} 
              x={window.innerHeight*0.034} 
              y={window.innerHeight*0.81}
              onClick={handleOpenRecipes}
              style={{cursor:'pointer'}}
              />;
  };
  
  //charge les cours
  const ClassBook = () => {
    const [image] = useImage('https://raw.githubusercontent.com/Chocoluna/RecetteLinux/main/client/src/assets/book2.png');
    return <Image image={image} width={window.innerHeight*0.10} 
              height={window.innerHeight*0.10} 
              x={window.innerHeight*0.14} 
              y={window.innerHeight*0.81}
              onClick={handleOpenClass}
              style={{cursor:'pointer'}}
              />;
  };

  //Boite de dialogue pour les récompenses
  const setAlertReward = (nomIngr) => {
    let itemR = itemReward[currentLevel].find(x => x.Nom === nomIngr && x.status === false);
    if(itemR){
      addScore(15);
      checkStatusR(nomIngr)
      swal({
        title: "Un choix intéressant!",
        text: "Le lutin est distrait par tes exploits culinaires. Si distrait qu'il laisse échapper de ses poches un cupcake et 15 pièces d'or",
        icon: cupcake,
        button: "ok",
      });
    }
    else{
      swal({
        title: "Tu as déjà gagné cette récompense!",
        button: "ok",
      });
    }
  }

    //Boite de dialogue pour les pièges
  const setAlertTrap = (nomIngr) => {
    let itemT = itemTrap[currentLevel].find(x => x.Nom === nomIngr && x.status === false);
    console.log(itemT);
    if(itemT){
      checkStatusT(nomIngr)
      swal({
        title: "C'est un piège!",
        text: "Tu t'es laissé distraire et le lutin en profite pour mettre le bazar dans la cuisine! Résouds cet exercice dans le temps limité ou tu auras des ennuis.",
        icon: lutin,
        button: "ok",
      });
      handleOpenTrap()
    }
    else{
      swal({
        title: "Tu es déjà tombé dans ce piège!",
        text:"tu perds 5 pièces d'or!",
        button: "ok",
      });
      minusScore(5);
    }
  }

//si condition changement de niveau Vrai
//changement de niveau
  const newLevel = () => {
    console.log(levels.length, currentLevel);
    let existing = checkLevel();
    if(existing === true){
      currentLevel++;
      if((currentLevel < levels.length)){
        currentLevelData = levels[currentLevel];
        currentLevelDataTrap = levelsTrap[currentLevel];
        currentLevelDataReward = levelsReward[currentLevel];
        swal({
          title: "Bravo, tu as gagné un niveau!",
          text: "+10 pièces d'or",
          icon: goldpot,
          button: "ok",
        });
      }
      else if(currentLevel >= levels.length){
        swal({
          title: "Victoire, tu as réussi à te débarasser du lutin et tes invités vont se régaler!",
          text: "",
          icon: rainbow,
          button: "ok",
        }).then((elem) => {
          setProfil();
        })
      }
    }
  }

  //condition pour changer de niveau
  const checkLevel = () => {
    let recettes = GetRecette();
    let valretour = true;
    recettes[currentLevel].Ingredients.forEach(elem =>{
      if(elem.nb < elem.nbTotal){
        valretour = false;
      }
    });
    return valretour;
  }

  //Gestion de réponses aux questions
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');
 
  const handleRadioChange = (event) => {
    setValue((event.target).value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === rep) {
      setError(false);
      addIngredient(nomIngredient);
      addScore(5);
      incrementQuestTrue();
      swal({
        title: "Bonne réponse",
        text: "Tu as gagné un ingrédient et 5 pièces d'or!",
        icon: "success",
        button: "ok",
      });
      checkStatus(nomIngredient);

    } else {
      setError(true);
      minusScore(2);
      swal({
        title: "Mauvais réponse",
        text: "Tu perds 2 pièces d'or ! Retourne lire " + idQuest + " pour trouvez la bonne réponse",
        icon: "error",
        button: "ok",
      });
    } 
    handleCloseActivity();
    newLevel();
  };

  useEffect(() => {
    let status = sessionStorage.getItem("modalIntro");
    if(!status){
      setOpenIntro(true);
      sessionStorage.setItem("modalIntro", 1);
    }
  })

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MenuAppBar />
      <div justifyContent="flex-start">
        <Modal
            open={openModalIntro}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className={classes.modalQuizz}
            disableEscapeKeyDown={true}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'column' },
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}
            >
              
              <Box component="img"
                src={lutin}
                alt="lutin"
                sx={{
                  height: 170
                }}
              />
              <Box sx={{ textAlign: 'justify', mx: 5, mt:1 }}
                >
                <Typography variant="body1" gutterBottom>
                Tu as ramassé une pièce d’or hier, à la lisière de la forêt de Brocéliande. Malheureusement pour toi, cette pièce appartenait à un lutin ! 
                Pour le récupérer et se venger, celui-ci t’a suivi et s’est caché dans ta cuisine. Pas de chance ! Tu attends des invités pour le dîner.
                Il te faut alors préparer le repas mais aussi déjouer les mauvaises farces de ton nouvel occupant ! Sinon, ta cuisine Linux deviendra 
                sa cuisine ! Et ta maison, deviendra sa maison !
                </Typography>
                <Typography variant="body1" >
                  Pour te débarrasser du lutin, retrouve les ingrédients éparpillés dans ta cuisine et réalise les recettes. Chaque recette réalisée te
                  fait gagner un niveau. 
                </Typography>
              </Box>
              <Box component="img"
                src={coin}
                alt="coin"
                sx={{
                  height: 30
                }}
              />
              <Box sx={{ textAlign: 'justify', mx: 5, mt:1, mb : 2 }}
              >
                <Typography variant="body1" gutterBottom>Pour obtenir les ingrédients, clique dessus et réponds aux questions. Si tu réponds juste, 
                tu gagnes un ingrédient ! Si tu réponds faux... Retourne lire le chapitre du cours correspondant pour pouvoir retenter ta chance 
                plus tard.</Typography>
                <Typography variant="body1" gutterBottom>
                Les recettes à réaliser se trouvent dans le livre de recettes sur le sol de ta cuisine. A côté se trouve le livre de cours, 
                qui te permettra de répondre aux questions. En cliquant sur ton pseudonyme dans la barre de navigation (en haut à gauche), tu trouveras 
                des informations sur ta progression et la liste des compétences à acquérir.</Typography>
              </Box>
              
              <Button onClick={handleCloseIntro} className={classes.BtnJeu}>JOUER</Button>
            </Box>
          </Modal>
        </div>
      <div>
        <Modal
          open={openModalActivity}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className={classes.modalQuizz}
        >
          <Box sx={{ textAlign: 'justify'}}>
            <Button onClick={handleCloseActivity} className={classes.buttonClose}><img src={cross} alt="Close" height="40vh" /></Button>
            <form onSubmit={handleSubmit} >
              <FormControl sx={{m: 3}} error={error} variant="standard">
                <FormLabel id="demo-error-radios" className={classes.inModal}>{text}</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-error-radios"
                  name="quiz"
                  value={value}
                  onChange={handleRadioChange}
                >
                  { tabQuest.map(elem => 
                    <FormControlLabel value={elem} control={<Radio className={classes.inModal} />} label={elem} />
                    )}
                </RadioGroup>
                <FormHelperText>{helperText}</FormHelperText>
                <Button className={classes.BtnMots} type="submit" variant="outlined">
                  Valider mes réponses
                </Button>
              </FormControl>
            </form>
          </Box>
        </Modal>
      </div>
      <div>
        <Modal
            open={openModalRecipes}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className={classes.modalBook}
          >
            <Box sx={{textAlign: 'center'}}>
              <Button onClick={handleCloseRecipes} className={classes.buttonClose}><img src={cross} alt="Close" height="40vh" /></Button>
              <h2>Recettes</h2>
              <DisplayRecipe/>
            </Box>
          </Modal>
      </div>
      <div justifyContent="flex-start">
        <Modal
            open={openModalClass}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className={classes.modalBook}
          >
            <Box >
              <Button onClick={handleCloseClass} className={classes.buttonClose}><img src={cross} alt="Close" height="40vh" /></Button>
              <DisplayClass/>
            </Box>
          </Modal>
        </div>
        <div justifyContent="flex-start">
          <Modal
            open={openModalTrap}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className={classes.modalQuizz}
          >
            <Box sx={{ textAlign: 'justify', m: 5 }}>
              <Button onClick={handleCloseTrap} className={classes.buttonClose}><img src={cross} alt="Close" height="40vh" /></Button>
              <h2>IT'S A TRAP</h2>
              <Typography >Ici se trouveront différentes activités / exercices, à réaliser en un temps limité, avec des niveaux de difficultés variables en fonction des niveaux. Si l'activité est réussie, le.a joueur.euse a une petite récompense, si ielle échoue, une grosse punition (perte d'ingrédients, de pièces d'or, etc)</Typography>
            </Box>
          </Modal>
        </div>
        <div className={classes.center}>
          <Stage width={window.innerHeight} height={window.innerHeight * 0.95} styles="border-color: black">
            <Layer>
              <BackgroundImage/>
            </Layer>
            <Layer>
              <RecipeBook />
              <ClassBook />
              { currentLevelData.map(items => <LoadItem elem={items}/>)}
              { currentLevelDataTrap.map(items => <LoadTrap elem={items}/>)}
              { currentLevelDataReward.map(items => <LoadReward elem={items}/>)}              
            </Layer>
          </Stage>

        </div>
    </div>
  );
}

////////////////////////////////////////////
//////////////Fonctions Activity///////////
///////////////////////////////////////////
let text;
let rep;
let idQuest;
let nomIngredient = "";
let newScore = "";
let tabQuest = [];
let questions = [Quizzfacile, QuizzIntermédiaire, Quizzexpert];

//vérifie si une question est validée ou non
function checkStatus(nomIngr){
  let question = questions[currentLevel].find(x => x.name === nomIngr && x.status === false);
  question.status = true;
}

//rendu aléatoire des propositions de quizz
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

//incrémente le nombre d'ingrédients gagnés
export function addIngredient(nomIngr){
let recettes = GetRecette();
recettes.forEach(recette => {
  let tmp = recette.Ingredients.find(x => x.Ingredient === nomIngr);
  if(tmp){
    tmp.nb++;
  }
});
SetRecette(recettes);  
}

////////////////////////////////
//////Fonctions Items//////////
///////////////////////////////
let itemReward = [rewardLevel1, rewardLevel2, rewardLevel3];
function checkStatusR(nomIngr){
  let itemR = itemReward[currentLevel].find(x => x.Nom === nomIngr && x.status === false);
  itemR.status = true;
}

let itemTrap = [trapLevel1, trapLevel2, trapLevel3];
function checkStatusT(nomIngr){
  let itemT = itemTrap[currentLevel].find(x => x.Nom === nomIngr && x.status === false);
  itemT.status = true;
}

////////////////////////////////
//////Fonctions PO//////////
///////////////////////////////

//incrémente le score (=pièces d'or)
export function addScore(newScore){
let player = GetPlayer();
let score = player.score;
player.score = score + newScore;
SetPlayer(player);
}

//décrémente le score (=pièces d'or)
export function minusScore(newScore){
  let player = GetPlayer();
  let score = player.score;
    if(player.score >=2){
      player.score = score - newScore;
    }
  SetPlayer(player);
  }


export default App;

