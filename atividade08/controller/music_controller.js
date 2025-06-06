import Music from "../models/music.js";
import Singer from "../models/singer.js"
import Album from "../models/album.js"

async function createMusic(req, res){
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
    res.json(music);
}

async function listMusics(req, res) {
    const list = await Music.findAll({include: [Singer, Album]});
    res.json(list);
}

async function editMusic(req,res){
    const musicEdit = await Music.findOne({where: {id:req.body.id}});
    musicEdit.title = req.body.title;
    musicEdit.description = req.body.description;
    musicEdit.year = req.body.year;
    if(await musicEdit.save()){
        res.json({mensage: 'Registro Alterado'});
    }else{
        res.json({mensage: 'Erro ao alterar'});
    }
    
}

async function deleteMusic(req,res){
    const removeMusic = await Music.findOne({where: {id:req.body.id}});
    removeMusic.destroy();
    res.json({mensage: 'Registro removido'})
    
}

export { createMusic, listMusics , editMusic , deleteMusic };