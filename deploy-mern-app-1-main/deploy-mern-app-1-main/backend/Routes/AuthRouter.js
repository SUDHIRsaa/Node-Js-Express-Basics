const { signup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');

const r = require('express');
const router=r.Router();
router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);

module.exports = router;