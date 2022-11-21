const router = require('express').Router();
const { TechnologiesController } = require('../controllers');

router.get('/technologies', TechnologiesController.getAll);
router.get('/technologies/:id', TechnologiesController.getById);
router.get('/technologies/search/:name', TechnologiesController.search);
module.exports = router;
