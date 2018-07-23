var exress=require('express');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : '172.17.0.1',
  user     : 'root',
  password : 'root',
  database : 'NodeDB'
});

connection.connect();

var app = exress();

var server=app.listen(80,listening);

app.get('/insert/:longt/:lat', function (req, res) {
  var data =req.params;
  res.send('Hello World'+Number(data.longt)+','+Number(data.lat)+'')

  connection.query('insert into testTable1 (longt,lat) values('+Number(data.longt)+','+Number(data.lat)+');', function (error, results, fields) {
    if (error) throw error;

  });
})

var answer;
app.get('/view', function (req, res) {
  connection.query('select * from testTable1', function (error, results, fields) {
    if (error) throw error;
   // answer = JSON.stringify(res.rows[0]);
   res.send(results);
  });
})



function listening(){

  console.log("Listening...")

}

app.use(exress.static("Front"));
