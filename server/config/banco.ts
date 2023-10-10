const mysql = require("mysql")

// export const conexao = () => {

    export const bdConexao = mysql.createConnection({
        user: "root",
        host: "localhost",
        port: "3306",
        database: "streetpets",
        password: ""
    });

//     return bdConexao;
// }

