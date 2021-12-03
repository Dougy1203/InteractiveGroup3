//const { resourceLimits } = require("worker_threads");

const canvas = document.getElementById('graph');
const ctx = canvas.getContext('2d');
//let colors = ['#FF0017', '#04FF00', '#0032FF', '#0032FF', '#FBFF00', '#BD00FF'];
//let angles = [Math.PI * 0.3, Math.PI * 0.7, Math.PI * 0.2, Math.PI * 0.4, Math.PI * 0.4];
let beginAngle = 0;
let endAngle = 0;
let offset = 10;
let offsetX;
let offsetY;
let medianAngle;

canvas.width = 1000;
canvas.height = 600;

let pbAngles = [Math.PI * 1, Math.PI * 1];
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
  ctx.fillText('Crunchy PB', 150, 75);

  ctx.fillStyle = '#000';
  ctx.font = '20px Arial';
  ctx.fillText('Creamy PB', 150, 350);
}

let phoneAngles = [Math.PI * 1, Math.PI * 1];
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
  ctx.fillText('Apple', 725, 75);

  ctx.fillStyle = '#000';
  ctx.font = '20px Arial';
  ctx.fillText('Android', 725, 350);
};

let movieAngles = [Math.PI * 0.5, Math.PI * 0.5, Math.PI * 0.5, Math.PI * 0.5];
let movieColors = ['#0032FF', '#FBFF00', '#FF0017', '#04FF00'];

function drawMoviesChart () {
  drawMovieNames();
    for(let i = 0; i < movieAngles.length; i++) {
        beginAngle = endAngle;
        endAngle = endAngle + movieAngles[i];
        ctx.beginPath();
        ctx.fillStyle = movieColors[i % movieColors.length];
        ctx.moveTo(475, 400);
        ctx.arc(475, 400, 120, beginAngle, endAngle);
        ctx.lineTo(475, 400);
        ctx.stroke();
        ctx.fill();
      };
};

const drawMovieNames = () => {
  ctx.fillStyle = '#000';
  ctx.font = '20px Arial';
  ctx.fillText('Star Wars', 275, 350);

  ctx.fillStyle = '#000';
  ctx.font = '20px Arial';
  ctx.fillText('Star Trek', 590, 350);
};

drawPBChart();
drawPhoneChart();
drawMoviesChart();

// const url = 'http://localhost:3000/api';

// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     });

// let fetchData = async (url) => {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
// };

// fetchData('http://localhost:3000/api');

