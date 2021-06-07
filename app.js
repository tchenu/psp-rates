const config = require('./config.js')
const Connectors = require('./Connectors/Connectors.js')
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('rates.db');

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS rates(currency TEXT NOT NULL, value INTEGER NOT NULL)");
});

Connectors.map((connector) => {
    const rates = (new connector(config)).fetch() || []

    if (rates instanceof Promise) {
        rates.then((rates) => {
            if (rates.length > 0) {
                rates.map((rate) => {
                    console.log(rate)
                })
            }
        })
    }
})