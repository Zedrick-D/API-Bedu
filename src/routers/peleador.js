const express = require("express");
const router = express.Router();
const { createPeleador , getPeleador, deletePeleador, getPeleadores } = require("../controller/peleador");

router.post("/peleadores", createPeleador);
router.get("/peleador/:id", getPeleador);
router.delete("/peleador/:id", deletePeleador);
router.get("/peleadores", getPeleadores);

module.exports = router;