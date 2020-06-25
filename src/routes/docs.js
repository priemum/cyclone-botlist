const { Router } = require("express");

const route = Router();

route.get("/", async (req, res, next) => {
       res.render("/docs", docs);
});

module.exports = route;
