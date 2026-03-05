const router = require("express").Router();
const userController = require("../controllers/userController");
const ensureLoggedIn = require("../middleware/ensureLoggedIn");

router.get("/all", ensureLoggedIn, userController.getAllUsers);
router.get("/details", ensureLoggedIn, userController.getUserDetails);
router.get("/is-logged-in", userController.isLoggedIn);
router.get("/logout", userController.logout);
router.post("/new", userController.createNewUser);
router.post("/login", userController.login);
router.post("/delete", ensureLoggedIn, userController.deleteUser);

module.exports = router;
