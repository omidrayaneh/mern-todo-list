const { Register , Login} = require("../Controllers/AuthController");
const {userVerification} = require("../middleware/AuthMiddleware")
const router = require("express").Router();

router.post("/register", Register);
router.post("/login", Login);
router.post('/',userVerification)

module.exports = router;