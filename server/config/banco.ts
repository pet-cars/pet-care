const mysql = require("mysql")

export const conexao = () => {

    const bdConexao = mysql.createConnection({
        user: "root",
        host: "localhost",
        port: "3306",
        database: "StreetPets",
        password: ""
    });

    return bdConexao;
}

