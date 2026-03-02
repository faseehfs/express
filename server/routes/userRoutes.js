const router = require("express").Router();
const userController = require("../controllers/userController");

router.get("/all", userController.getAllUsers);
router.post("/new", userController.createNewUser);

module.exports = router;
