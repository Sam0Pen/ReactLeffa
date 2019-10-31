var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('leffat.db');

db.serialize(function() {

    let sql = "CREATE TABLE leffa (" +
        "id integer PRIMARY KEY NOT NULL, " +
        "nimi text NOT NULL, " +
        "arvosteltu date NOT NULL, " +
        "traileri text NOT NULL, " +
        "ohjaaja text NOT NULL, " +
        "vuosi integer, " +
        "arvosana )";

    db.run(sql, (err) => {
        if (err) {
            return console.log(err.message);
        }
        console.log("Taulu tehtiin");
    });

    sql = "INSERT INTO `leffa` (`id`, `nimi`, `arvosteltu`, `traileri`, `ohjaaja`, `vuosi`, `arvosana`) "+
        " VALUES (1, 'Star Wars', '2019-03-10', 'https://www.youtube.com/watch?v=1g3_CFmnU7k', 'George Lucas', 1977, 10)";
    db.run(sql, (err) => {
        if (err) {
            return console.log(err.message);
        }
        console.log("Rivi lisättiin");
    });

    sql = "INSERT INTO `leffa` (`id`, `nimi`, `arvosteltu`, `traileri`, `ohjaaja`, `vuosi`, `arvosana`) "+
        " VALUES (2, 'Pulp Fiction', '2019-03-10', 'https://www.youtube.com/watch?v=s7EdQ4FqbhY', 'Quentin Tarantino', 1994, 10)";
    db.run(sql, (err) => {
        if (err) {
            return console.log(err.message);
        }
        console.log("Rivi lisättiin");
    });


    db.each("SELECT id, nimi FROM leffa", function(err, row) {
        if (err) {
            return console.log(err.message);
        }
        console.log(row.id + ", " + row.otsikko);
    });

    db.close();
});