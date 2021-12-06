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
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

fetchData('http://localhost:3000/api');