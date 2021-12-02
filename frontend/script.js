const result = document.getElementById("results");

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

function search(){
  let queryCategory = document.querySelector
}

let fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  result.innerHTML = "";

  for(let i=0;i<data.length;i++){
    result.innerHTML = result.innerHTML + `<div>
    Question 1: Crunchy or Creamy Peanut Butter </br>
    User Answer: ${data[i].securityQuestion1} </br>
    Question 2: Apple or Android? </br>
    User Answer: ${data[i].securityQuestion2} </br>
    Question 3: Best Movie Franchise? </br>
    User Answer: ${data[i].securityQuestion3} </br>
    </div></br></br>`;
  }
};

fetchData('http://localhost:3000/api');

