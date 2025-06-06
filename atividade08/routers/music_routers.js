import { createMusic, deleteMusic, editMusic, listMusics } from "../controller/music_controller.js";

import { Router } from "express";

const music_router = Router();
music_router.get('/', listMusics);
music_router.post('/', createMusic);
music_router.put('/', editMusic);
music_router.delete('/', deleteMusic);

export default music_router;