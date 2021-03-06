'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  OAUTH_ENDPOINT: '"http://localhost:3000"',
  API_ENDPOINT: '"https://api.github.com"'
})
