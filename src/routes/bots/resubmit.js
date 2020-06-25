const { Router } = require("express");
const Bots = require("@models/bots");

const route = Router();

route.get("/:id", async (req, res, next) => {
    let clientid = req.params.value;
    Bots.findOne({
        botid: clientid}, (err , bot) => {
    if (!bot) return res.sendStatus(404);
    if (bot.state !== 'deleted') return res.sendStatus(404);
    res.render("resubmit/index", { bot: bot });
        bot.state = 'unverified'
        bot.save()
    })
});

module.exports = route;
