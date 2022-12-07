const router = require("express").Router();

const endamniteController = require("../controllers/endamnite.controller");

router.get("/", endamniteController.getAllEndamnites);
router.get("/total", endamniteController.getArgentPayerParSocietes);
router.get("/:id", endamniteController.getbyIDEndamnites);
router.post("/", endamniteController.addEndamnites);
router.put("/:id", endamniteController.updateEndamnites);
router.delete("/:id", endamniteController.deleteEndamnites);

module.exports = router;
