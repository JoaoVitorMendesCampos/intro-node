import express from 'express';
import { create } from 'express-handlebars';
import session from 'express-session';
import css from 'connect-session-sequelize';

import cors from 'cors';

import syncer from './database/syncer.js';
import music_web_router from './routers/web/music_routers.js';
import singer_web_router from './routers/web/singer_routers.js';
import album_web_router from './routers/web/album_routers.js';
import user_web_router from './routers/web/user_router.js';
import sequelize from './database/mysql.js';
import { checkLogged } from './controller/web/user_controller.js';

import music_router from './routers/api/music_routers.js';
import singer_router from './routers/api/singer_routers.js';
import album_router from './routers/api/album_routers.js';

//sequelize.sync();

if (!await syncer()) {
    process.exit();
}

const app = express();

app.use(cors({

    allowOrigin: '*',

    methods: 'GET,PUT,POST,DELETE',

}));

const hbs = create({

    extname: '.handlebars',

    defaultLayout: 'main',

    layoutsDir: 'views/layouts/',

    partialsDir: 'views/partials/'

});

hbs.handlebars.registerHelper('eq', (a,b) => {return a == b});

hbs.handlebars.registerHelper('contains', (a,b) => {return typeof a != 'undefined' && a.indexOf(b) != -1});

const SequelizeStore = css(session.Store);

const sequelizeStore = new SequelizeStore({

    db: sequelize,

    tableName: 'sessions',

    checkExpirationInterval: 5 * 60 * 1000,

    expiration: 1 * 60 * 60 * 1000 

});

app.use(session({

    secret: '*&long+and+secure+secret=%445',

    name: 'sess_cookie_param',

    store: sequelizeStore,

    cookie: {

        maxAge: 1 * 60 * 60 * 1000,

        secure: false, // if using HTTPS

        httpOnly: true // somente browsers

    },

    saveUninitialized: false, 

    resave: false

}));

await sequelizeStore.sync();

app.use(express.json());

app.use(express.urlencoded());

app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');

app.set('views', './views');

app.get('/', (req, res) => {

    res.render('home');

});

app.use('/musics',checkLogged, music_web_router);
app.use('/singers',checkLogged, singer_web_router);
app.use('/albums',checkLogged, album_web_router);
app.use('/users', user_web_router); // ainda com as rotas de api

app.use('/api/musics', music_router);
app.use('/api/singers', singer_router);
app.use('/api/albums', album_router);
app.use('/api/users', user_web_router);

app.use(express.static('public'));
app.listen(80, ()=>{
    console.log('Escutando...');
});

