const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//router based middleware for user
router.use((req, res, next) => {
    console.log("I am router level middleware");
    next();
})

router.post("/login",userController.login);
router.post("/register",userController.register);

module.exports = router;
