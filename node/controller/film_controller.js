import Film from "../models/film.js";

async function createFilm(req, res){
    const film = await Film.create({
        title: req.body.title,
        description: req.body.description,
        year: req.body.year
    });
    res.json(film);
}

async function listFilms(req, res) {
    const list = await Film.findAll();
    res.json(list);
}

async function editFilm(req,res){
    const filmEdit = await Film.findOne({where: {id:req.body.id}});
    filmEdit.title = req.body.title;
    filmEdit.description = req.body.description;
    filmEdit.year = req.body.year;
    if(await filmEdit.save()){
        res.json({mensage: 'Registro Alterado'});
    }else{
        res.json({mensage: 'Erro ao alterar'});
    }
    
}

async function deleteFilm(req,res){
    const removeFilm = await Film.findOne({where: {id:req.body.id}});
    removeFilm.destroy();
    res.json({mensage: 'Registro removido'})
    
}

export { createFilm, listFilms , editFilm , deleteFilm };