import Album from "../models/album.js";
import Music from "../models/music.js";

async function createAlbum(req, res){
    const album = await Album.create({
        title: req.body.title,
        description: req.body.description,
        year: req.body.year
    });
    res.json(album);
}

async function listAlbums(req, res) {
    const list = await Album.findAll({include: Music});
    res.json(list);
}

async function editAlbum(req,res){
    const albumEdit = await Album.findOne({where: {id:req.body.id}});
    albumEdit.title = req.body.title;
    albumEdit.description = req.body.description;
    albumEdit.year = req.body.year;
    if(await albumEdit.save()){
        res.json({mensage: 'Registro Alterado'});
    }else{
        res.json({mensage: 'Erro ao alterar'});
    }
    
}

async function deleteAlbum(req,res){
    const removeAlbum = await Album.findOne({where: {id:req.body.id}});
    removeAlbum.destroy();
    res.json({mensage: 'Registro removido'})
    
}

export { createAlbum, listAlbums , editAlbum , deleteAlbum };