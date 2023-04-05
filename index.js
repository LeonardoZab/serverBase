const express = require('express')
const app = express()

const hostname = 'localhost'
const PORT = 3000
/* --- configurações do express --- */
app.use(express.urlencoded({extend:true}))
app.use(express.json())
/* -------------------------------- */

/* --- arquivos estáticos --- */
app.use(express.static('public'))
/* -------------------------- */

/* --- Rotas do Projeto --- */

app.get(`/` ,(req,res)=>{
    res.render('index.html')
})


/* ------------------------ */
app.listen(PORT,hostname, ()=>{
    console.log(`O servidor está rodando ${hostname}:${PORT}`)
})