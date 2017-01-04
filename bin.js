#!/usr/bin/env node

const Bot = require('./index.js')
const config = require('./config.json')
const CronJob = require('cron').CronJob
const pkg = require('./package.json')

var program = require('commander')

program
.version(pkg.version)
.parse(process.argv)

function tweet () {
  var bot = new Bot(config)
  var promise = bot.tweet()
    .then(function (res) {
      console.log(pkg.name, 'tweeted at', new Date())
      return res
    })
    .catch(function (err) {
      console.log('error:', err)
    })

  return promise
}

var job = new CronJob('0 0 * * * *', tweet, function () {
  console.log(pkg.name, 'stopped at', new Date())
}, false, 'America/Los_Angeles')

job.start()
