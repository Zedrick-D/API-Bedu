const { connect, sync } = require("./models/sequelize");
const Peleador = require("./models/peleador");

exports.initDatabase = async function () {
	await connect();
	await sync();
};

// const Desafio = sequelize.define(
// 	"competitions",
// 	{
// 		name: {
// 			type: DataTypes.STRING(50),
// 			allowNull: false,
// 		},
// 		location: {
// 			type: DataTypes.STRING(50),
// 			allowNull: false,
// 		},
// 	},
// 	{
// 		timestamps: false,
// 	}
// );

// const Resultados = sequelize.define(
//     "results",{

//         position: {
//             type: DataTypes.INTEGER(16),
//             validate: {
//                 min: 1,
//                 max: 16
//             },

//             allowNull: false,
//         },

//         next_round: {
//             type: DataTypes.BOOLEAN,
//             defaultValue: false,
            
//             allowNull: false,  
//         },
//     },
//     {
//         timestamps: true,
//     }
// );