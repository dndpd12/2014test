var express = require('express');
var router = express.Router();
var dbcon = require('./dbcon');
/* GET users listing. */
/*
router.get('/', function(req, res) {
  res.send('respond with a resource');
});
*/

router.get('/', function(req,res){

    var query = dbcon.conn.query('select * from SDTIMETABLE',function(err,rows){
        console.log(rows);
        res.json(rows);
    });
    console.log(query);
});

module.exports = router;

