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

    const list = await Music.findAll({ include: [Singer, Album] });
    const list_processed = list.map((music)=>{return music.toJSON()});
    const albums = await Album.findAll({raw: true});
    const singers = await Singer.findAll({raw: true});
    console.log(list_processed);
    res.render('musics/musics', { musics: list_processed, albums: albums, singers: singers});




}



async function editMusic(req, res) {
    const music = await Music.findOne({ where: { id: req.body.id }, include: Singer });
    const music_editing = music.toJSON();
    const albums = await Album.findAll({raw: true});
    const singers = await Singer.findAll({raw: true});
    music_editing.singers = music_editing.Singers.map((sg) => {return sg.id});
    console.log(music_editing);
    res.render('musics/musics', { 
        action: 'edit', 
        music_editing: music_editing,
        albums: albums,
        singers: singers
    });

}



async function saveMusic(req, res) {

    const singers = [];

    for (let i = 0; i < req.body.singers.length; i++) {

        const singer = await Singer.findByPk(req.body.singers[i]);

        singers.push(singer);

    }

    const music = await Music.findOne({ where: { id: req.body.id } });

    music.title = req.body.title;

    music.description = req.body.description;

    music.year = req.body.year;

    music.AlbumId = req.body.AlbumId;

    await music.save();

    await music.setSingers(singers);

    res.render('alerts', { title: 'Musics', body: 'Music edited.' });

}



async function deleteMusic(req, res) {

    const music = await Music.findOne({ where: { id: req.body.id } });

    await music.destroy();

    res.render('alerts', { title: 'Musics', body: 'Music deleted.' });

}



export { createMusic, listMusics, editMusic, saveMusic, deleteMusic };

