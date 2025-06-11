import { createAlbum, deleteAlbum, editAlbum, listAlbums, saveAlbum } from "../../controller/web/album_controller.js";

import { Router } from "express";



const album_web_router = Router();

album_web_router.get('/', listAlbums);

album_web_router.post('/create', createAlbum);

album_web_router.post('/edit', editAlbum);

album_web_router.post('/save', saveAlbum);

album_web_router.post('/delete', deleteAlbum);



export default album_web_router;