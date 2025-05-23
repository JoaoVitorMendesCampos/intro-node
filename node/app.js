import express from 'express';
const app = express();
app.use('/', (req, res) => {
    res.end("Rodando");
});

app.listen(80, ()=>{
    console.log('Escutando...');
});