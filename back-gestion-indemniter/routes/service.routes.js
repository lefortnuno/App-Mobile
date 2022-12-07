const router = require("express").Router();

const serviceController = require("../controllers/service.controller");

router.get("/", serviceController.getAllServices);
router.get("/:id", serviceController.getbyIDServices);
router.post("/", serviceController.addServices);
router.put("/:id", serviceController.updateServices);
router.delete("/:id", serviceController.deleteServices);


module.exports = router;
