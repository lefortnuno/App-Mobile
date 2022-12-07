const router = require("express").Router();

const personnelController = require("../controllers/personnel.controller");

router.get("/", personnelController.getAllPersonnel);
router.get("/:id", personnelController.getbyIDPersonnel);
router.post("/", personnelController.addPersonnel);
router.put("/:id", personnelController.updatePersonnel);
router.delete("/:id", personnelController.deletePersonnel);

module.exports = router;
