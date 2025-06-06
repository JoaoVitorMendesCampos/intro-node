import { createSinger, deleteSinger, editSinger, listSinger } from "../controller/singer_controller.js";

import { Router } from "express";

const singer_router = Router();
singer_router.get('/', listSinger);
singer_router.post('/', createSinger);
singer_router.put('/', editSinger);
singer_router.delete('/', deleteSinger);

export default singer_router;