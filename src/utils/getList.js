const Bots = require("@models/bots");

module.exports = async () => {
    const bots = Bots.find({}, { _id: false, auth: false }).sort([['descending']]).exec((err, res) => { _id: false, auth: false })
    return bots.filter(bot => bot.state != "deleted")
};
