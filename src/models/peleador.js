const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define(
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