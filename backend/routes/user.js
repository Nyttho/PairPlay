const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/check", authMiddleware, userCtrl.checkAuth);

module.exports = router;
