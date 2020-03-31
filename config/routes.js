const express = require("express");
const router = express.Router();
const userController = require("../app/controllers/userController");
const categoryController = require("../app/controllers/categoryController");
const authenticateUser = require("../app/middlewears/authentication");
const eventController = require("../app/controllers/eventController");
const groupController = require("../app/controllers/groupController");
const multer = require("multer");
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

var upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter: fileFilter
});

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

router.get("/event", authenticateUser, eventController.list);
router.put("/event/:id", authenticateUser, eventController.update);
router.put(
  "/event/img/:id",
  authenticateUser,
  upload.single("img"),
  eventController.updateImg
);
router.delete("/event/:id", authenticateUser, eventController.destroy);
router.post(
  "/event",
  authenticateUser,
  upload.single("img"),
  eventController.create
);

router.get("/group", authenticateUser, groupController.list);
router.put("/group/:id", authenticateUser, groupController.update);
router.put(
  "/group/img/:id",
  authenticateUser,
  upload.single("img"),
  groupController.update
);
router.delete("/group/:id", authenticateUser, groupController.destroy);
router.post(
  "/group",
  authenticateUser,
  upload.single("img"),
  groupController.create
);

module.exports = router;

//token - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTdjYTY1ZDY3MjlkZTRhODQ1NDgyYjQiLCJlbWFpbCI6InBhdml0aHJhQGdtYWlsLmNvbSIsImNyZWF0ZWRBdCI6MTU4NTIyNzQ3MTAzOCwiaWF0IjoxNTg1MjI3NDcxfQ.XOXCyQoyLp2Yb3EY6WdXEDofeC0JMJ85lUlzXSBJVFg
//_id - 5e7ca65d6729de4a845482b4
