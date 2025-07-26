import { Sequelize } from "sequelize";

 const sequelize = new Sequelize({
     dialect: "mysql",
     host: 'localhost',
     port: '3306',
     username: 'root',
     password: '219534-asd-@',
     database: 'spotify'
 });
//const sequelize = new Sequelize('postgresql://jvmc009:8rHsCFga2rVPKuaZAcdndZbJfK0Oacvl@dpg-d1dva83ipnbc73dohgs0-a/spotify_7tl0');

//await sequelize.sync();

export default sequelize;