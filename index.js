const witch = require('witch-clock')
const Twitter = require('twitter')
const _ = require('lodash')

const TWIT_DEFAULTS = {
  // TODO ?
}

function Bot (config) {
  this.config = {}
  _.assign(this.config, TWIT_DEFAULTS, config)
  this.client = new Twitter(this.config)
  this.most_recent_tweet = null
}

Bot.prototype.say = function (date) {
  if (date === undefined) date = new Date()
  var events = [
    witch.solar.soonest(date),
    witch.solar.recent(date),
    witch.lunar.soonest(date),
    witch.lunar.recent(date)
  ].map(function (event) {
    return event.code
  }).join(', ')

  return events
}

Bot.prototype.tweet = function (date) {
  var text = this.say(date)
  if (this.most_recent_tweet && (this.most_recent_tweet === text)) {
    return Promise.reject(new Error('status is a duplicate'))
  } else {
    this.most_recent_tweet = text
  }
  return this.tweetThis(text)
}

Bot.prototype.tweetThis = function (text) {
  return this.client.post('statuses/update', {
    status: text
  })
}

Bot.prototype.reply = function (text, date) {
  // TODO bot.reply
  throw new Error('not implemented')
}

module.exports = Bot
