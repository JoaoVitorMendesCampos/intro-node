import Music from "../models/music.js";
import Singer from "../models/singer.js";

async function createSinger(req, res){
    const singer = await Singer.create({
        name: req.body.name,
        cpf: req.body.cpf,
        date_of_birth: req.body.date_of_birth
    });
    res.json(singer);
}

async function listSinger(req, res) {
    const list = await Singer.findAll({include: Music});
    res.json(list);
}

async function editSinger(req,res){
    const singerEdit = await Singer.findOne({where: {id:req.body.id}});
    singerEdit.name = req.body.name;
    singerEdit.cpf = req.body.cpf;
    singerEdit.date_of_birth = req.body.date_of_birth;
    if(await singerEdit.save()){
        res.json({mensage: 'Registro Alterado'});
    }else{
        res.json({mensage: 'Erro ao alterar'});
    }
    
}

async function deleteSinger(req,res){
    const removeSinger = await Singer.findOne({where: {id:req.body.id}});
    removeSinger.destroy();
    res.json({mensage: 'Registro removido'})
    
}

export { createSinger, listSinger , editSinger , deleteSinger };