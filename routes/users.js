var express = require('express');
var router = express.Router();
var dbcon = require('./dbcon');
var app = require('./app');
/* GET users listing. */
/*
router.get('/', function(req, res) {
  res.send('respond with a resource');  
});
*/

router.get('/', function(res){

console.log('aaaaa');
    var query = dbcon.conn.query('select * from users',function(err,rows){
        console.log(rows);
        //res.json(rows);
    });
    console.log(query);
});

router.post('/', function(req,res){
	console.log('in');
	var  user = {'userid':req.body.userid,
				'name':req.body.name,
				'address':req.body.address
	};


    var query = dbcon.conn.query('insert into user set ?',function(err,result){
        // console.log(rows);
        //res.json(rows);
        if(err){
        	console.error(err);
        	throw err;
        }
    	console.log(query);
    	res.send(200,'success');
    });

	// res.render('./users');
});

module.exports = router;



   // var query = dbcon.conn.query('select * from SDTIMETABLE',function(err,rows){
   //      console.log(rows);
   //      //res.json(rows);
   //  });