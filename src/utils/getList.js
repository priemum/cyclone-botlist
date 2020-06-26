const Bots = require("@models/bots");

module.exports = async () => {
    const bots = await Bots.find({
        bot.state: "deleted"
    }).sort([
    ['descending']
  ]).exec((err, res) => {
    })
};
