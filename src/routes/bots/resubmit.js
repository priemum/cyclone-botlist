const { Router } = require("express");
const Bots = require("@models/bots");

const route = Router();

route.get("/:id", async (req, res, next) => {
   await Bots.findOne({
        botid: req.params.id}, (err,res) => {
        if (!res) return res.sendStatus(404);
       if (res.state !== "deleted") return res.sendStatus(404);
        res.state = 'unverified'
        res.save
       res.render("resubmit/index", { bot: bot });
    })
});

module.exports = route;
