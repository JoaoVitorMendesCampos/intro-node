import { DataTypes, STRING } from "sequelize";
import sequelize from "../database/mysql.js";
const Album = sequelize.define('Album', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    year: DataTypes.INTEGER
});

export default Album;