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

export { createFilm, listFilms };