const Connector = require('./Connector.js')

const BanqueDeFrance = class BanqueDeFrance extends Connector
{
    constructor(config) {
        super(config)
    }

    fetch() {
        //
    }
}

module.exports = BanqueDeFrance;