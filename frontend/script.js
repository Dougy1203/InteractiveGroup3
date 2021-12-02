//const { resourceLimits } = require("worker_threads");

const canvas = document.getElementById('graph');
const ctx = canvas.getContext('2d');
let colors = ['#FF0017', '#04FF00', '#0032FF', '#0032FF', '#FBFF00', '#BD00FF'];
let angles = [Math.PI * 0.9, Math.PI * 0.7, Math.PI * 0.2, Math.PI * 0.4, Math.PI * 0.4];
let beginAngle = 300;
let endAngle = 300;
let offset = 10;
let offsetX;
let offsetY;
let medianAngle;

canvas.width = 600;
canvas.height = 600;

function draw () {

    for(let i = 0; i < angles.length; i++) {
        beginAngle = endAngle;
        endAngle = endAngle + angles[i];
        
        ctx.beginPath();
        ctx.fillStyle = colors[i % colors.length];
        ctx.moveTo(200, 200);
        ctx.arc(200, 200, 120, beginAngle, endAngle);
        ctx.lineTo(200, 200);
        ctx.stroke();
        ctx.fill();
      };
};

draw();

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

