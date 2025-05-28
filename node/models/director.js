import { DataTypes, STRING } from "sequelize";
import sequelize from "../database/mysql.js";
const Director = sequelize.define('Director', {
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    rgd: DataTypes.STRING,
    specialization: DataTypes.STRING,
    date_of_birth: DataTypes.DATE
});

export default Director;