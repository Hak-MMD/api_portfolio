const express = require("express");
const router = express.Router();
const {
  getData,
  editData,
  login,
  post,
} = require("../controllers/dataControllers");
const { loginCheck } = require("../middleware/login");

router.get("/data", getData);
router.post("/post", post);
router.post("/login", login);
router.patch("/editData", loginCheck, editData);

module.exports = router;
