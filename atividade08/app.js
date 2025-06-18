import syncer from './database/syncer.js';
import express from 'express';
import { create } from 'express-handlebars';
import music_web_router from './routers/web/music_routers.js';
import singer_web_router from './routers/web/singer_routers.js';
import album_web_router from './routers/web/album_routers.js';

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

hbs.handlebars.registerHelper('eq', (a,b) => {return a == b});

hbs.handlebars.registerHelper('contains', (a,b) => {return typeof a != 'undefined' && a.indexOf(b) != -1});

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
app.use('/albums', album_web_router)

app.use(express.static('public'));

app.listen(80, ()=>{
    console.log('Escutando...');
});

