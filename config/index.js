const env = process.env.NODE_ENV || 'dev'

const config = require(`./environments/${env.toLocaleLowerCase()}`)

module.exports = config