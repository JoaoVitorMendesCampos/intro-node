import Director from "../models/director.js";

async function createDirector(req, res){
    const director = await Director.create({
        name: req.body.name,
        cpf: req.body.cpf,
        rgd: req.body.rgd,
        specialization: req.body.specialization,
        date_of_birth: req.body.date_of_birth
    });
    res.json(director);
}

async function listDirector(req, res) {
    const list = await Director.findAll();
    res.json(list);
}

async function editDirector(req,res){
    const directorEdit = await Director.findOne({where: {id:req.body.id}});
    directorEdit.name = req.body.name;
    directorEdit.cpf = req.body.cpf;
    directorEdit.rgd = req.body.rgd;
    directorEdit.specialization = req.body.specialization;
    directorEdit.date_of_birth = req.body.date_of_birth;
    if(await directorEdit.save()){
        res.json({mensage: 'Registro Alterado'});
    }else{
        res.json({mensage: 'Erro ao alterar'});
    }
    
}

async function deleteDirector(req,res){
    const removeDirector = await Director.findOne({where: {id:req.body.id}});
    removeDirector.destroy();
    res.json({mensage: 'Registro removido'})
    
}

export { createDirector, listDirector , editDirector , deleteDirector };