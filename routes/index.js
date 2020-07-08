const router = require('koa-router')();
const indexController = require('../controllers/index');
const loginController = require('../controllers/login');

router.get('/', indexController.redirectLogin);
router.post('/api/v1/login', loginController.login);
router.get('/api/v1/logout', indexController.logout);
router.post('/api/v1/findUserByPage', indexController.findUserByPage);

module.exports = router;