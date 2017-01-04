#!/usr/bin/env node

const Bot = require('./index.js')
const config = require('./config.json')
const CronJob = require('cron').CronJob
const pkg = require('./package.json')

var program = require('commander')

program
.version(pkg.version)
.parse(process.argv)

var bot = new Bot(config)
// var job = new CronJob('00 00 12 * * *', bot.tweet.bind(bot), function () {
//   console.log(pkg.name, 'tweeted at', new Date())
// }, false, 'America/Los_Angeles')

// job.start()

bot.tweet()
.catch(function (err) {
  console.log(err)
})