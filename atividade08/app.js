import syncer from './database/syncer.js';
import express from 'express';
import { create } from 'express-handlebars';
import music_web_router from './routers/web/music_routers.js';
import singer_web_router from './routers/web/singer_routers.js';
import album_router from './routers/api/album_routers.js';

//sequelize.sync();

if (!await syncer()) {
    process.exit();
}

const app = express();

const hbs = create({

    extname: '.handlebars',

    defaultLayout: 'main',

    layoutsDir: 'views/layouts/',

    partialsDir: 'views/partials/'

});

app.use(express.json());

app.use(express.urlencoded());

app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');

app.set('views', './views');

app.get('/', (req, res) => {

    res.render('home');

});

app.use('/musics', music_web_router);
app.use('/singers', singer_web_router);
app.use('/albums', album_router)

app.listen(80, ()=>{
    console.log('Escutando...');
});

