const Bots = require("@models/bots");

module.exports = async () => {
  const bots = await Bots.find({
  }).sort([
    ['descending']
  ]).exec((err ,res) => {
    res.filter(bot => bot.state != "deleted")
  }, { _id: false, auth: false })
};
