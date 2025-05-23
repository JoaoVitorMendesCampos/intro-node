import { createFilm, listFilms } from "../controller/film_controller.js";

import { Router } from "express";

const film_router = Router();
film_router.get('/', listFilms);
film_router.post('/', createFilm);

export default film_router;