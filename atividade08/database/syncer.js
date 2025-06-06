import Album from "../models/album.js";
import Music from "../models/music.js";
import Singer from "../models/singer.js";
import sequelize from "./mysql.js";

async function syncer() {
    try {
        await sequelize.authenticate();
        //K Music.sync();
        Music.belongsTo(Album);
        Album.hasMany(Music);
        Music.belongsToMany(Singer, {through: 'Music_Singer'});
        Singer.belongsToMany(Music, {through: 'Music_Singer'});
        await sequelize.sync();
    } catch (error) {
        console.log('Erro ao acessar a base de dados.')
        return false;
    }
    return true;
    
}

export default syncer;