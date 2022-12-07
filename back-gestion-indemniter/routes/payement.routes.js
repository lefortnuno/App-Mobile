const router = require("express").Router();

const payementController = require("../controllers/payement.controller");

router.get("/", payementController.getAllPayements);
router.get("/:id", payementController.getbyIDPayements);
router.put("/:id", payementController.updatePayements);

module.exports = router;
