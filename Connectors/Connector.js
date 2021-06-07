const Connector = class Connector
{
    constructor (config) {
        this.__config = config
    }

    getBase() {
        return this.__config.base
    }

    getCurrencies() {
        return this.__config.currencies
    }
}

module.exports = Connector