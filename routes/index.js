const router = require('koa-router')();
const index = require('../controllers/index');
const loginContr = require('../controllers/login');
const homeContr = require('../controllers/home');

router.get('/', index)
router.get('/login', loginContr.login)
router.post('/login', loginContr.signin)
router.get('/signin_failed', loginContr.sign_failed)
router.get('/home', homeContr.home)

module.exports = router;