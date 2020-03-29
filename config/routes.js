const express = require("express");
const router = express.Router();
const userController = require("../app/controllers/userController");
const categoryController = require("../app/controllers/categoryController");
const authenticateUser = require("../app/middlewears/authentication");

router.get("/user", authenticateUser, userController.list);
router.get("/user/:id", authenticateUser, userController.show);
router.put("/user/:id", authenticateUser, userController.update);
router.post("/user", userController.create);
router.delete("/user/:id", authenticateUser, userController.destroy);
router.post("/user/login", userController.login);
router.delete("/user/logout", authenticateUser, userController.logout);

router.get("/category", categoryController.list);
router.put("/category/:id", authenticateUser, categoryController.update);
router.delete("/category/:id", authenticateUser, categoryController.destroy);
router.post("/category", authenticateUser, categoryController.create);

module.exports = router;
