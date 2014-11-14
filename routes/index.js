

 exports.index = function(req, res){
 	res.render('index');		
 	console.log('11111');
 };

 exports.users = function(req, res){
 	res.render('users');
 };

 exports.score = function(req, res){
 	res.render('pages/score');
 };

 exports.timetable = function(req, res){
 	res.render('pages/timetable');
 };

 exports.vote = function(req, res){
 	res.render('pages/vote');
 };
 exports.admin = function(req, res){
 	res.render('pages/admin');
 };