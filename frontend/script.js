const { resourceLimits } = require("worker_threads");

const url = 'http://localhost:3000/api';

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

let fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
};

fetchData('http://localhost:3000/api');