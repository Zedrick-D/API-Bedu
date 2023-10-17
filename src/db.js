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



async function connect() {
    try{
        await sequelize.authenticate();
        console.log(">Conenctando a la BD");
    } catch(e){
        console.error("> No se pudo conectar a la BD");
        console.error(e);

    }
};

const Fighters = sequelize.define(
	"participants",
	{
		name: {
			type: DataTypes.STRING(50),
			allowNull: false,
			unique: true,
		},

		age: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},

        race: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
	},
	{
		timestamps: false,
	}
);

const Desafio = sequelize.define(
	"competitions",
	{
		name: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		location: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
	},
	{
		timestamps: false,
	}
);

const Resultados = sequelize.define(
    "results",{

        position: {
            type: DataTypes.INTEGER(16),
            validate: {
                min: 1,
                max: 16
            },

            allowNull: false,
        },

        next_round: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            
            allowNull: false,  
        },
    },
    {
        timestamps: true,
    }
);


async function sync() {
	try {
		// Crea/actualiza las tablas dentro de la base de datos
		await sequelize.sync({ force: FORCE_DB_UPDATE === "yes" });
		console.log("> Base de datos actualizada!");
	} catch (e) {
		console.error("> No se puede actualizar la base de datos");
		console.error(e);
	}
}

exports.initDatabase = async function () {
	await connect();
	await sync();
};