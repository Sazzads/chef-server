const express = require('express');
const cors = require("cors")

const app = express();
app.use(cors())

app.get('/', (req, res) => {
    res.json({ messege: "hello server running" })
});

const allChefs = require("./data/chefs.json")
app.get('/allchefs', (req, res) => {
    res.json(allChefs)
});

const allfoods = require("./data/foods.json")
app.get('/allfoods', (req, res) => {
    res.json(allfoods)
});

app.get('/allfoods/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const selectedFood = allfoods.filter(f => f.id === id);
    res.send(selectedFood)
})

app.get('/allchefs/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const allchefs = allChefs.find(c => c.id === id);
    res.send(allchefs)
})



app.listen(5000, () => {
    console.log("server is running on port 5000");
});