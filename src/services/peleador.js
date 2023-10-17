const Peleador = require("../models/peleador");

exports.insert = function (data){
    return Peleador.create(data);
};

exports.findById = function (id) {
	return Peleador.findByPk(id);
};

exports.deleteById = async function (id) {
	const peleador = await Peleador.findByPk(id);
	await peleador.destroy();
};

exports.findAll = function () {
	return Peleador.findAll();
};