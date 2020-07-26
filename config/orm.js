//import connection
const connection=require('./connection')

const orm={
    selectAll: function(cb){
    connection.query("SELECT * FROM burgers", function(err,data){
        if(err) cb(err,null);
        cb(null,data);
    });
    },
    cookOne: function(burgerName,cb){
        let sql=`INSERT INTO burgers (name) VALUES ("${burgerName}")`;
        connection.query(sql,function(err, data) {
            if(err) cb(err,null);
            cb(null,data)
        });
    },
    updateOne: function(value,id,cb){
        let sql= `UPDATE burgers SET eaten_burger = ${value} WHERE id = ${id}`
        connection.query(sql,function(err, data) {
            if(err) cb(err,null);
            cb(null,data)
        });
    },
    updateName: function(value,id,cb){
        let sql= `UPDATE burgers SET name = "${value}" WHERE id = ${id}`
        connection.query(sql,function(err, data) {
            if(err) cb(err,null);
            cb(null,data)
        });
    }

};

module.exports= orm;