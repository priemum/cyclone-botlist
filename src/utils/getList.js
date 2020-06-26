const Bots = require("@models/bots");

module.exports = async () => {
    const bots = await Bots.find({
    }).sort([
    ['descending']
  ]).exec((err, res) => {
    })
    return bots.filter(bot => bot.state != "deleted")
};
