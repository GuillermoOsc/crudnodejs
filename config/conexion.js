// -------------- Conexión a bbdd MySql

var mysql = require("mysql");
var con = mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'',
            database:'librerianode',

}
);

con.connect(
    (err) => {
if(!err){
  console.log('conexion extablecida');
        } else {
            console.log('error de conexion');
        } 
    }
);

module.exports = con;