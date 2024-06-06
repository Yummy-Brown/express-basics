const express = require("express");
const router = express.Router();
const {getHomepage, getAboupage, getUsers, getSingleUser} = require("../controllers/userController");
const { auth } = require("../middlewares/all")


router.get("/", getHomepage);
router.get("/about", getAboupage);
router.get("/users", auth, getUsers);
router.get("/users/:userId", auth, getSingleUser );


module.exports = router;