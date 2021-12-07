const result = document.getElementById("results");

const canvas = document.getElementById('graph');
const ctx = canvas.getContext('2d');
//let colors = ['#FF0017', '#04FF00', '#0032FF', '#0032FF', '#FBFF00', '#BD00FF'];
//let angles = [Math.PI * 0.3, Math.PI * 0.7, Math.PI * 0.2, Math.PI * 0.4, Math.PI * 0.4];
let beginAngle = 0;
let endAngle = 0;
let offset = 10;

let crunchyPBCounter = 0;
let creamyPBCounter = 0;
let appleCounter = 0;
let androidCounter = 0;
let StarWarsCounter = 0;
let StarTrekCounter = 0;
let LordOfTheRingsCounter = 0;
let HarryPotterCounter = 0;

let pbCrunchyAngle = 1;
let pbCreamyAngle = 1;

let phoneAppleAngle = 1;
let phoneAndroidAngle = 1;

let moviesStarWarsAngle = 0.5;
let moviesStarTrekAngle = 0.5;
let moviesHarryPotterAngle = 0.5;
let moviesLordOfTheRingsAngle = 0.5;

canvas.width = 1000;
canvas.height = 600;

let pbAngles = [Math.PI * pbCreamyAngle, Math.PI * pbCrunchyAngle];
let pbColors = ['#FF0017', '#04FF00'];

function drawPBChart () {
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

const drawPBNames = () => {
  ctx.fillStyle = '#000';
  ctx.font = '20px Arial';
  ctx.fillText('Favorite Peanut Butter:', 100, 60);

  ctx.fillStyle = '#000';
  ctx.font = '20px Arial';
  ctx.fillText('Crunchy PB', 800, 350);

  ctx.fillStyle = '#000';
  ctx.font = '20px Arial';
  ctx.fillText('Creamy PB', 800, 380);
}

let phoneAngles = [Math.PI * phoneAndroidAngle, Math.PI * phoneAppleAngle];
let phoneColors = ['#0032FF', '#FBFF00'];

function drawPhoneChart () {
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

const drawPhoneNames = () => {
  ctx.fillStyle = '#000';
  ctx.font = '20px Arial';
  ctx.fillText('Apple Or Android:', 675, 60);

  ctx.fillStyle = '#000';
  ctx.font = '20px Arial';
  ctx.fillText('Apple', 800, 410);

  ctx.fillStyle = '#000';
  ctx.font = '20px Arial';
  ctx.fillText('Android', 800, 440);
};

let movieAngles = [Math.PI * moviesLordOfTheRingsAngle, Math.PI * moviesHarryPotterAngle, Math.PI * moviesStarWarsAngle, Math.PI * moviesStarTrekAngle];
let movieColors = ['#0032FF', '#FBFF00', '#FF0017', '#04FF00'];

function drawMoviesChart () {
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

const drawMovieNames = () => {
  ctx.fillStyle = '#000';
  ctx.font = '20px Arial';
  ctx.fillText('Favorite Movie Series:', 375, 300);

  ctx.fillStyle = '#000';
  ctx.font = '20px Arial';
  ctx.fillText('Star Wars', 800, 470);

  ctx.fillStyle = '#000';
  ctx.font = '20px Arial';
  ctx.fillText('Star Trek', 800, 500);

  ctx.fillStyle = '#000';
  ctx.font = '20px Arial';
  ctx.fillText('Harry Potter', 800, 530);

  ctx.fillStyle = '#000';
  ctx.font = '20px Arial';
  ctx.fillText('Lord of the Rings', 800, 560);
};

drawPBChart();
drawPhoneChart();
drawMoviesChart();

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

  result.innerHTML = data;

  // for(let i=0;i<data.length;i++){
  //   result.innerHTML = result.innerHTML + `<div>
  //   Question 1: Crunchy or Creamy Peanut Butter </br>
  //   User Answer: ${data[i].securityQuestion1} </br>
  //   Question 2: Apple or Android? </br>
  //   User Answer: ${data[i].securityQuestion2} </br>
  //   Question 3: Best Movie Franchise? </br>
  //   User Answer: ${data[i].securityQuestion3} </br>
  //   </div></br></br>`;
  // }
};

fetchData('http://localhost:3000/api');