
var con = require('../config/conexion');
module.exports = {

    index: function (req, res) {

        con.query("select * FROM libros", function (err, datos){
            console.log(datos);
        });

        res.render('libros/index', { title: 'Crud con Express' });
    }
}