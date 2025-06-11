import Music from "../../models/music.js";
import Singer from "../../models/singer.js"
import Album from "../../models/album.js"



async function createMusic(req, res) {

    const singers = [];

    for (let i = 0; i < req.body.singers.length; i++) {

        const singer = await Singer.findByPk(req.body.singers[i]);

        singers.push(singer);

    }

    const music = await Music.create({

        title: req.body.title,

        description: req.body.description,

        year: req.body.year,

        AlbumId: req.body.AlbumId

    });

    await music.addSingers(singers);

    res.render('alerts', { title: 'Musics', body: 'Music created.' });

}



async function listMusics(req, res) {

    const list = await Music.findAll({ include: [Singer, Album], raw: true });


    res.render('musics/musics', { musics: list });




}



async function editMusic(req, res) {

    const music = await Music.findOne({ where: { id: req.body.id } });

    res.render('musics/musics', { action: 'edit', music_editing: music.dataValues });

}



async function saveMusic(req, res) {

    const music = await Music.findOne({ where: { id: req.body.id } });

    music.title = req.body.title;

    music.description = req.body.description;

    music.year = req.body.year;

    music.AlbumId = req.body.AlbumId;

    await music.save();

    res.render('alerts', { title: 'Musics', body: 'Music edited.' });

}



async function deleteMusic(req, res) {

    const music = await Music.findOne({ where: { id: req.body.id } });

    await music.destroy();

    res.render('alerts', { title: 'Musics', body: 'Music deleted.' });

}



export { createMusic, listMusics, editMusic, saveMusic, deleteMusic };

