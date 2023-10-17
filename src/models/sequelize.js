const { Sequelize, DataTypes } = require("sequelize");

const {
	MYSQL_HOST,
	MYSQL_DATABASE,
	MYSQL_USERNAME,
	MYSQL_PASSWORD,
	FORCE_DB_UPDATE,
} = process.env;

const sequelize = new Sequelize({
	dialect: "mysql",
	host: MYSQL_HOST,
	username: MYSQL_USERNAME,
	password: MYSQL_PASSWORD,
	database: MYSQL_DATABASE,
});

exports.sequelize = sequelize;

exports.connect = async function connect() {
    try{
        await sequelize.authenticate();
        console.log(">Conenctando a la BD");
    } catch(e){
        console.error("> No se pudo conectar a la BD");
        console.error(e);

    }
};

exports.sync = async function sync() {
	try {
		// Crea/actualiza las tablas dentro de la base de datos
		await sequelize.sync({ force: FORCE_DB_UPDATE === "yes" });
		console.log("> Base de datos actualizada!");
	} catch (e) {
		console.error("> No se puede actualizar la base de datos");
		console.error(e);
	}
};