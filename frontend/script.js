const result = document.getElementById("results");

const canvas = document.getElementById('graph');
const ctx = canvas.getContext('2d');
//let colors = ['#FF0017', '#04FF00', '#0032FF', '#0032FF', '#FBFF00', '#BD00FF'];
//let angles = [Math.PI * 0.3, Math.PI * 0.7, Math.PI * 0.2, Math.PI * 0.4, Math.PI * 0.4];
let beginAngle = 0;
let endAngle = 0;
let offset = 10;

let crunchyPBCounter;
let creamyPBCounter;
let appleCounter;
let androidCounter;
let StarWarsCounter;
let StarTrekCounter;
let LordOfTheRingsCounter;
let HarryPotterCounter;
let PBValue, TechValue, MovieValue;

let pbCrunchyAngle = 1;
let pbCreamyAngle = 1;

let phoneAppleAngle = 1;
let phoneAndroidAngle = 1;

let moviesStarWarsAngle;
let moviesStarTrekAngle;
let moviesHarryPotterAngle;
let moviesLordOfTheRingsAngle;

canvas.width = 1000;
canvas.height = 600;

const drawPBNames = () => {
  ctx.fillStyle = '#000';
  ctx.font = '20px Arial';
  ctx.fillText('Favorite Peanut Butter:', 100, 60);

  ctx.fillStyle = '#000';
  ctx.font = '20px Arial';
  ctx.fillText('Crunchy PB', 800, 350);
  ctx.fillText(crunchyPBCounter, 975, 350);

  ctx.fillStyle = '#002500'
  ctx.fillRect(730, 335, 60, 20);

  ctx.fillStyle = '#000';
  ctx.font = '20px Arial';
  ctx.fillText('Creamy PB', 800, 380);
  ctx.fillText(creamyPBCounter, 975, 380);

  ctx.fillStyle = '#8B9D83'
  ctx.fillRect(730, 365, 60, 20);
}

function drawPBChart () {
  let pbAngles = [Math.PI * pbCreamyAngle, Math.PI * pbCrunchyAngle];
  let pbColors = ['#8B9D83', '#002500'];
  drawPBNames();
    for(let i = 0; i < pbAngles.length; i++) {
        beginAngle = endAngle;
        endAngle = endAngle + pbAngles[i];
        ctx.beginPath();
        ctx.fillStyle = pbColors[i % pbColors.length];
        ctx.moveTo(200, 200);
        ctx.arc(200, 200, 120, beginAngle, endAngle);
        ctx.lineTo(200, 200);
        ctx.stroke();
        ctx.fill();
      };
};

const drawPhoneNames = () => {
  ctx.fillStyle = '#000';
  ctx.font = '20px Arial';
  ctx.fillText('Apple Or Android:', 675, 60);

  ctx.fillStyle = '#000';
  ctx.font = '20px Arial';
  ctx.fillText('Apple', 800, 410);
  ctx.fillText(appleCounter, 975, 410);

  ctx.fillStyle = '#6A7B76'
  ctx.fillRect(730, 395, 60, 20);

  ctx.fillStyle = '#000';
  ctx.font = '20px Arial';
  ctx.fillText('Android', 800, 440);
  ctx.fillText(androidCounter, 975, 440);

  ctx.fillStyle = '#65334D'
  ctx.fillRect(730, 425, 60, 20);
};

function drawPhoneChart () {
  let phoneAngles = [Math.PI * phoneAndroidAngle, Math.PI * phoneAppleAngle];
  let phoneColors = ['#65334D', '#6A7B76'];
  drawPhoneNames();
    for(let i = 0; i < phoneAngles.length; i++) {
        beginAngle = endAngle;
        endAngle = endAngle + phoneAngles[i];
        ctx.beginPath();
        ctx.fillStyle = phoneColors[i % phoneColors.length];
        ctx.moveTo(750, 200);
        ctx.arc(750, 200, 120, beginAngle, endAngle);
        ctx.lineTo(750, 200);
        ctx.stroke();
        ctx.fill();
      };
};

const drawMovieNames = () => {
  ctx.fillStyle = '#000';
  ctx.font = '20px Arial';
  ctx.fillText('Favorite Movie Series:', 375, 300);

  ctx.fillStyle = '#000';
  ctx.font = '20px Arial';
  ctx.fillText('Star Wars', 800, 470);
  ctx.fillText(StarWarsCounter, 975, 470);

  ctx.fillStyle = '#FFE81F';
  ctx.fillRect(730, 455, 60, 20);

  ctx.fillStyle = '#000';
  ctx.font = '20px Arial';
  ctx.fillText('Star Trek', 800, 500);
  ctx.fillText(StarTrekCounter, 975, 500);

  ctx.fillStyle = '#114B5F';
  ctx.fillRect(730, 485, 60, 20);

  ctx.fillStyle = '#000';
  ctx.font = '20px Arial';
  ctx.fillText('Harry Potter', 800, 530);
  ctx.fillText(HarryPotterCounter, 975, 530);

  ctx.fillStyle = '#6B2737';
  ctx.fillRect(730, 515, 60, 20);

  ctx.fillStyle = '#000';
  ctx.font = '20px Arial';
  ctx.fillText('Lord of the Rings', 800, 560);
  ctx.fillText(LordOfTheRingsCounter, 975, 560);

  ctx.fillStyle = '#456990';
  ctx.fillRect(730, 545, 60, 20);
};

function drawMoviesChart () {
  let movieAngles = [Math.PI * moviesLordOfTheRingsAngle, Math.PI * moviesHarryPotterAngle, Math.PI * moviesStarWarsAngle, Math.PI * moviesStarTrekAngle];
  let movieColors = ['#456990', '#6B2737', '#FFE81F', '#114B5F'];
  drawMovieNames();
    for(let i = 0; i < movieAngles.length; i++) {
        beginAngle = endAngle;
        endAngle = endAngle + movieAngles[i];
        ctx.beginPath();
        ctx.fillStyle = movieColors[i % movieColors.length];
        ctx.moveTo(475, 430);
        ctx.arc(475, 430, 120, beginAngle, endAngle);
        ctx.lineTo(475, 430);
        ctx.stroke();
        ctx.fill();
      };
};

function search(){
  let queryCategory = document.querySelector
}

let fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  crunchyPBCounter = data.CrunchyPB;
  creamyPBCounter = data.CreamyPB;
  appleCounter = data.Apple;
  androidCounter = data.Android;
  StarWarsCounter = data.StarWars;
  StarTrekCounter = data.StarTrek;
  HarryPotterCounter = data.HarryPotter;
  LordOfTheRingsCounter = data.LordOfTheRings;

  PBValue = crunchyPBCounter + creamyPBCounter;
  TechValue = appleCounter + androidCounter;
  MovieValue = StarTrekCounter + StarWarsCounter + HarryPotterCounter + LordOfTheRingsCounter;

  pbCrunchyAngle = crunchyPBCounter / PBValue * 2;
  pbCreamyAngle = creamyPBCounter / PBValue * 2;
  phoneAppleAngle = appleCounter / TechValue * 2;
  phoneAndroidAngle = androidCounter / TechValue * 2;
  moviesHarryPotterAngle = HarryPotterCounter / MovieValue * 2;
  moviesStarTrekAngle = StarTrekCounter / MovieValue * 2;
  moviesStarWarsAngle = StarWarsCounter / MovieValue * 2;
  moviesLordOfTheRingsAngle = LordOfTheRingsCounter / MovieValue * 2;

  ctx.clearRect(970, 310, 1000, 600);
  drawPBChart();
  drawPhoneChart();
  drawMoviesChart();

};

const loop = () => {
  fetchData('http://localhost:3000/api');
}

loop();
setInterval(loop,3000);

