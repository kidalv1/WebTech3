const express = require('express');
const app = express();
const bodyParser = require("body-parser");  
app.use(bodyParser());
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

var mySort;
var db;

MongoClient.connect('mongodb://localhost',(err, client)=>{
    if(err) return console.log(err)
    db = client.db('examen')
    mySort = {datum_vaststelling :1, opnameplaats_straat :1};
    app.listen(3000, function(){
        console.log('listening on 3000')
    })
})
app.get('/list',function(req , res){
    db.collection('overtredingen').find().sort(mySort).toArray((err, result) => {
        if (err) return console.log(err)
        // renders index.ejs
        res.render('list.ejs', {overtredingen: result})
      })
    
})


app.get('/' , function(req , res){
    res.render('index.ejs');
})

app.post('/' , function(req , res){
    var straat = req.body.straat;
    var snelheid = parseInt(req.body.snelheid,10);
    console.log(snelheid);

    //
    db.collection('overtredingen').find({"opnameplaats_straat":straat,"aantal_overtredingen_snelheid" : {$gte :snelheid }}).sort(mySort).toArray((err, result) => {
        if (err) return console.log(err)
        // renders index.ejs
        
        if(result.length <=0){
            res.render('result_notFound.ejs');
        }
        else{
            res.render('result_search.ejs', {overtredingen: result})
        }
        
    })
})