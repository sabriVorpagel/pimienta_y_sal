var express = require('express');
var router = express.Router();

const {index, detail} = require('../Controllers/indexControllers');

/* GET home page. */
router
    .get('/', index)
    .get('/detail/:id', detail)

module.exports = router;
