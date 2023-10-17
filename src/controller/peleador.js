const { insert } = require("../services/peleador");

const {
	findAll,
	findById,
	deleteById,
	update,
} = require("../services/peleador");

exports.createPeleador = async function(req,res){
    const { name, age, race } = req.body;
    const peleador = await insert({ name, age, race });
    res.status(201).json(peleador);
};

exports.getPeleador = async function (request, response) {
	const { id } = request.params;
	const peleador = await findById(id);
	response.status(200).json(peleador);
};

exports.deletePeleador = async function (request, response) {
	const { id } = request.params;
	await deleteById(id);
	response.status(204).end();
};

exports.getPeleadores = async function (request, response) {
	const peleadores = await findAll();
	response.status(200).json(peleadores);
};
