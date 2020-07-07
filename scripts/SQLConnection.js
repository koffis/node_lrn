const mysql = require('mysql');

// конфигурация пакетов

const conn = mysql.createConnection({
   host: "127.0.0.1",
   user: "root",
   database: "node_test",
   password: "root"
});

conn.connect( err => {
    if (err) {
        console.log(err);
        return err;
    }
    else{
        console.log('Database -----> OK');
    }
});

let query = "SELECT * FROM `user`";

conn.query(query, (err, result, field) =>{
    console.log(err);
    console.log(result);
    console.log(result[1]['lastname']);
   // console.log(field);
});

conn.end( err =>{
    if (err) {
        console.log(err);
        return err;
    }
    else{
        console.log('Database -----> Close');
    }
});