import Music from "../../models/music.js";
import Singer from "../../models/singer.js"



async function createSinger(req, res) {

    const singer = await Singer.create({
        name: req.body.name,
        cpf: req.body.cpf,
        date_of_birth: req.body.date_of_birth
    });
    res.json(singer);

    res.render('alerts', { title: 'Singers', body: 'Singer created.' });

}



async function listSingers(req, res) {

    const list = await Singer.findAll({ include: Music, raw: true, nest: true});

    console.log(list);
    res.render('singers/singers', { singers: list });




}



async function editSinger(req, res) {

    const singer = await Singer.findOne({ where: { id: req.body.id } });

    res.render('singers/singers', { action: 'edit', singer_editing: singer.dataValues });

}



async function saveSinger(req, res) {

    const singer = await Singer.findOne({ where: { id: req.body.id } });

    singer.name = req.body.name;

    singer.cpf = req.body.cpf;

    singer.date_of_birth = req.body.date_of_birth;

    await singer.save();

    res.render('alerts', { title: 'Singers', body: 'Singer edited.' });

}



async function deleteSinger(req, res) {

    const singer = await Singer.findOne({ where: { id: req.body.id } });

    await singer.destroy();

    res.render('alerts', { title: 'Singers', body: 'Singer deleted.' });

}



export { createSinger, listSingers, editSinger, saveSinger, deleteSinger };