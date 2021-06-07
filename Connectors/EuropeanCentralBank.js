const Connector = require("./Connector.js") 
const axios = require('axios').default
const cheerio = require('cheerio')

const EuropeanCentralBank = class EuropeanCentralBank extends Connector
{
    constructor(config) {
        super(config)
    }

    async fetch() {
        const response = await axios.get(`https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html`)
        const $ = cheerio.load(response.data)
        let rates = []

        $('.forextable tbody tr').each(function (i, item) {
            rates.push({
                currency: $('td:eq(0)', item).text(),
                value: $('td:eq(2)', item).text().trim()
            })
        })

        return rates
    }
}

module.exports = EuropeanCentralBank