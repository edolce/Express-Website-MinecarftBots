var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('bots');
});

router.get('/commands',function(req,res,next){
    console.log(req.body)
})

router.post('/execute-command',function (req,res,next){

})

module.exports = router;
