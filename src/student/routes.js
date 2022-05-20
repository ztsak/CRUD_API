const { Router } = require ('express');
const controller = require ('./controller');

const router = Router();

router.get("/",  controller.getEmployee);
router.post("/", controller.addEmployee);
router.get("/:id",  controller.getEmployeeById); 
router.put("/:id", controller.updateEmployee);
router.delete("/:id", controller.removeEmployee);


module.exports = router; 