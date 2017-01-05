# witch-clock-bot

This is a twitter bot that tweets the date according to [witch-clock](https://github.com/garbados/witch-clock) any time it changes. witch-clock expresses dates relative to the nearest solar and lunar events, like so:

* VE-75 means the vernal equinox occurs in 75 days.
* WS+14 means the winter solstice happened 14 days ago.
* FIRST-2 means the first half moon occurs in two days.
* NEW+6 means the new moon happened 6 days ago.

Altogether, witch-clock-bot tweets dates like, "VE-75, WS+14, FIRST-2, NEW+6".

witch-clock uses [astronomia](https://github.com/commenthol/astronomia) to estimate when a solar or lunar event occurs. Because the precise moment depends on the actual positions of various cosmic bodies rather than algorithms computing their expected locations, the estimation may be off by about a minute. In another fifty years, it'll be off by more.

## roll your own

Get the code with [git](https://git-scm.com/), install dependencies with [npm](https://npmjs.com/):

    git clone https://github.com/garbados/witch-clock-bot
    cd witch-clock-bot
    npm install
    cp config.example.json config.json

Now open `config.json` and enter values for your bot account from [apps.twitter.com](https://apps.twitter.com/):

    {
      "consumer_key":         "...",
      "consumer_secret":      "...",
      "access_token_key":     "...",
      "access_token_secret":  "..."
    }

Then start the bot:

    npm start

Or, to add `witch-clock-bot` to your path:

    npm link

Now you can add `witch-clock-bot` to your [crontab](https://help.ubuntu.com/community/CronHowto, or run it with [runit](http://smarden.org/runit/), or whatever you're into.

You can also run `bin.js` directly with tools like [forever](https://www.npmjs.com/package/forever), if you'd prefer.

## license

GPL-3.0
