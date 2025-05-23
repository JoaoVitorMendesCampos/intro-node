import express from 'express';
const app = express();
app.use('/', (req, res) => {
    res.end("Rodando.ll");
});

app.listen(80, ()=>{
    console.log('Escutando...');
});