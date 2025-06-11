import Music from "../../models/music.js";
import Album from "../../models/album.js"



async function createAlbum(req, res) {

    const album = await Album.create({

        title: req.body.title,

        description: req.body.description,

        year: req.body.year,

    });
    res.json(album);
    res.render('alerts', { title: 'Albums', body: 'Album created.' });

}



async function listAlbums(req, res) {

    const list = await Album.findAll({ include: Music, raw: true, nest: true});

    console.log(list);

    res.render('albums/albums', { albums: list });




}



async function editAlbum(req, res) {

    const album = await Album.findOne({ where: { id: req.body.id } });

    res.render('albums/albums', { action: 'edit', album_editing: album.dataValues });

}



async function saveAlbum(req, res) {

    const album = await Album.findOne({ where: { id: req.body.id } });

    album.title = req.body.title;

    album.description = req.body.description;

    album.year = req.body.year;

    await album.save();

    res.render('alerts', { title: 'Albums', body: 'Album edited.' });

}



async function deleteAlbum(req, res) {

    const album = await Album.findOne({ where: { id: req.body.id } });

    await album.destroy();

    res.render('alerts', { title: 'Albums', body: 'Album deleted.' });

}



export { createAlbum, listAlbums, editAlbum, saveAlbum, deleteAlbum };

