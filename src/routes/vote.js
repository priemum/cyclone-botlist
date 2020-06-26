const { Router } = require("express");

const route = Router();

route.get("/", async (req, res, next) => {
       res.render("vote");
});

module.exports = route;
