'use strict'

console.log('starting up');

const awsServerlessExpress = require('aws-serverless-express')
const app = require('./src/app')
const server = awsServerlessExpress.createServer(app)

console.log('after server line');

exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context)
