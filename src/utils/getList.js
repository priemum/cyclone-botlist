const Bots = require("@models/bots");

module.exports = async () => {
const bots = await Bots.find({), { _id: false, auth: false })
bots.sort([['descending']])
return bots.filter(bot => bot.state != "deleted")
};
