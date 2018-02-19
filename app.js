const express = require('express');
const path = require('path');
const router = express();

router.set('view engine', 'ejs');

router.use(express.static(path.join(__dirname, 'assets')));
router.use(express.static(path.join(__dirname, 'views')));

const routes=require('./routes/router');
router.use(routes);

module.exports = router;

