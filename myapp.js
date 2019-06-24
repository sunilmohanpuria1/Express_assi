const express = require('express')
const app = express()
const port = 3003
app.set('view engine', 'ejs');
const bodyParser = require('body-parser');


app.get('/', (req, res) => {
    res.render('home');
    })

app.get('/add', (req, res) => {
    res.render('add');
    })

app.post('/add', (req, res) => {
    response = {
        news:req.body.Title,
        Discription:req.body.Discription
     };
    res.send('News Added');
    })
        
app.listen(port, () => console.log(`Example app listening on port ${port}!`))