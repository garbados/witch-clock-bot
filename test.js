var assert = require('assert')
var Bot = require('./index.js')

describe('witch-clock-bot', function () {
  before(function () {
    this.bot = new Bot()
  })

  it('say', function () {
    var date = new Date('2017-01-04T05:27:55.357Z')
    var tweet = this.bot.say(date)
    assert.equal(tweet, 'VE-75, WS+14, FIRST-2, NEW+6')
  })
})
