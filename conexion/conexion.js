var mysql      = require('mysql');
var connection = mysql.createConnection({
  // host     : 'localhost',
  // user     : 'root',
  // password : '',
  // database: 'videogames'
   
   host     : 'b47u5ptyk2vesyxk1rlt-mysql.services.clever-cloud.com',
   user     : 'uo6pjpuxtjdhq1jn',
   password : 's7oml5yZasOKZC92Gryt',
   database: 'b47u5ptyk2vesyxk1rlt'
 
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