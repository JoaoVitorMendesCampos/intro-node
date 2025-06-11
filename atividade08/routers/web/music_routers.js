import { createMusic, deleteMusic, editMusic, listMusics, saveMusic } from "../../controller/web/music_controller.js";

import { Router } from "express";



const music_web_router = Router();

music_web_router.get('/', listMusics);

music_web_router.post('/create', createMusic);

music_web_router.post('/edit', editMusic);

music_web_router.post('/save', saveMusic);

music_web_router.post('/delete', deleteMusic);



export default music_web_router;