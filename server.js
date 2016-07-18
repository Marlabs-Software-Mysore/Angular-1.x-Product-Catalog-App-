var express = require('express');
var dbName = "ProductCatlogDB";
// creating instance of node module
var app = express();
// bridge module b/w angular & mongodb
var mongojs=require('mongojs');
// use for post operation
var path = require('path');
var bodyParser = require('body-parser');
//call db with name contactlist
var db = mongojs(dbName,[dbName]);

// index page call
app.use(express.static(__dirname+ "/"));
// for post operation use
app.use(bodyParser.json());

// get all records from db
app.get('/'+dbName,function(req,res){
	//console.log("from server data");
		
	db.ProductCatlogDB.find(function(err,docs){
		//console.log(docs);
		res.json(docs);
	});
});

// add new entry into db
app.post('/'+dbName,function(req,res){
	//console.log(req.body);
db.ProductCatlogDB.insert(req.body,function(err,doc){
	res.json(doc);
});	

});

// edit operation for existing entry
app.get('/ProductCatlogDB/:id',function(req,res){
	var id = req.params.id;
	//console.log(id);
	db.ProductCatlogDB.findOne({_id:mongojs.ObjectId(id)},function(err,doc){
		res.json(doc);
	});
	
});

// delete operation for specific entry
app.delete('/ProductCatlogDB/:id',function(req,res){
	var id=req.params.id;
	//console.log(id);
	db.ProductCatlogDB.remove({_id:mongojs.ObjectId(id)},function(err,doc){
		res.json(doc);
	});
});

// updating records for existing object
 app.put('/ProductCatlogDB/:id', function (req, res) {
    var id = req.params.id;
    console.log(req.body.name);
    db.ProductCatlogDB.findAndModify({
        query: {_id: mongojs.ObjectId(id)},
        update: {$set: {
                name: req.body.name,
                email: req.body.email,
                number: req.body.number
            }}, new : true}, function (err, doc) {
        res.json(doc);
    });
});

app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname + '/app/Views/index.html'));
});
 // host app  port number call
app.listen(8033);
// check for server hitting
console.log("server is runing on port no 8033");