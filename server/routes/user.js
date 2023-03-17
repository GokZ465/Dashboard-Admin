const express = require("express");
const router = express.Router();
const userController = require("../controller/usercontroller.js");
const { protect } = require('../middleware/aauth');


router.post("/", userController.addUser);
router.get("/", protect, userController.getAllUsers);
router.get("/:id", protect, userController.getById);
router.put("/:id", protect, userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;