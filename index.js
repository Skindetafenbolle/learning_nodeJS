import express from 'express'

const app = express()
const PORT = 3000

app.get('/', (req, res)=>{
    res.status(200)
    res.send('Home page')
})

app.get('/about', (req, res)=>{
    res.status(200)
    res.send('About page')
})

app.get('/user/:userName/:id', (req,res)=>{
    res.send(`User id ${req.params.id}`)
})

app.listen(PORT, ()=>{
    console.log('Server started');
})