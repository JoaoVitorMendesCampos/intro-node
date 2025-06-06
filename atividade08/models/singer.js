import { DataTypes, STRING } from "sequelize";
import sequelize from "../database/mysql.js";
const Singer = sequelize.define('Singer', {
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    date_of_birth: DataTypes.DATE
});

export default Singer;