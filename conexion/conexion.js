var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database: 'videogames'
});

connection.connect(
(err)=>{

    if(!err){console.log("conexion establecida");}
    else {console.log("conexion fallida"); }
}

);

module.exports=connection;

// connection.query("SELECT * FROM `tblproductos", function(err,resultados){
//     console.log(resultados);
// });

// connection.end();