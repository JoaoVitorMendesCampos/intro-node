import { createSinger, deleteSinger, editSinger, listSingers, saveSinger } from "../../controller/web/singer_controller.js";

import { Router } from "express";



const singer_web_router = Router();

singer_web_router.get('/', listSingers);

singer_web_router.post('/create', createSinger);

singer_web_router.post('/edit', editSinger);

singer_web_router.post('/save', saveSinger);

singer_web_router.post('/delete', deleteSinger);



export default singer_web_router;