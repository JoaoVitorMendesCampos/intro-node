import { DataTypes, STRING } from "sequelize";
import sequelize from "../database/mysql.js";
const Music = sequelize.define('Music', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    year: DataTypes.INTEGER
});

export default Music;
