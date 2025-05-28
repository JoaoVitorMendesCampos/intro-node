import sequelize from './database/mysql.js';
import express from 'express';
import film_router from './routers/film_routers.js';
import director_router from './routers/director_routers.js';

sequelize.sync();

const app = express();

app.use(express.json());
/*app.use('/', (req, res) => {
    res.end("Rodando.");
});*/

app.use('/films', film_router);
app.use('/directors', director_router);

app.listen(80, ()=>{
    console.log('Escutando...');
});

