import { createAlbum, deleteAlbum, editAlbum, listAlbums } from "../../controller/api/album_controller.js";

import { Router } from "express";

const album_router = Router();
album_router.get('/', listAlbums);
album_router.post('/', createAlbum);
album_router.put('/', editAlbum);
album_router.delete('/', deleteAlbum);

export default album_router;