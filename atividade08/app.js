import syncer from './database/syncer.js';
import express from 'express';
import music_router from './routers/music_routers.js';
import singer_router from './routers/singer_routers.js';
import album_router from './routers/album_routers.js';

//sequelize.sync();

if (!await syncer()) {
    process.exit();
}

const app = express();

app.use(express.json());

app.use('/', (req, res) => {
    res.end("Rodando.");
});

app.use('/musics', music_router);
app.use('/singers', singer_router);
app.use('/albums', album_router)

app.listen(80, ()=>{
    console.log('Escutando...');
});

