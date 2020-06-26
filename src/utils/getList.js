const Bots = require("@models/bots");

module.exports = async () => {
  const bots = await Bots.find({
  }).sort([
    ['money', 'descending']
  ]).exec((err ,res) => {
    return res.filter(bot => bot.state != "deleted")
  }, { _id: false, auth: false })
};
