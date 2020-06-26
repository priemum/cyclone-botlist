const Bots = require("@models/bots");

module.exports = async () => {
const bots = await Bots.find({}, { _id: false, auth: false }).sort([['descending']])
 return bots.filter(bot => bot.state != "deleted")
};
