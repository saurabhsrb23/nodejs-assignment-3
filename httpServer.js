const http = require('http');
const express = require('express');

const app = express()


app.set('views', './views')
app.set('view engine', 'ejs')

const userArr = []

userArr.push(
    { name: 'Saurabh Srivastava' },
    { name: 'Anjan' },
    { name: 'SRB' },
    { name: 'Avinash' })

app.get('/', (req, res) => {
    res.render("user.ejs", { users: userArr })
})

// app.get('/user', (req, res) => {
//     console.log(req.query);
//     res.json({
//         name: req.query.name ? req.query.name : 'saurabh'
//     })
// })

app.get("*", (req, res) => {
    res.status(404).send('Page not Found')
})

app.listen(5000, () => {
    console.log('Server is up at 5000')
})

// const server =http.createServer((req,res)=>{
//     res.end('hello user, this is response');
// })
// app.get("+",(req,res)=>{
//     res.status(404).send('Page not Found')
// })
// server.listen(1000,()=>{
//     console.log('Server is up at 1000');
// })
