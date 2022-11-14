const express = require('express');
const { Show } = require('../models');
const showRouter = express.Router();

showRouter.get("/", async (req, res) => {
    Show.create({title: "Breaking Bad", genre: "drama", rating: 10})
    res.send(await Show.findAll())
})

showRouter.get("/:showId", async (req, res) => {
    res.send(await Show.findOne({where: {id: req.params.showId}}))
})

showRouter.get("/genres/:genre", async (req, res) => {
    res.send(await Show.findAll({where: {genre: req.params.genre}}))
})

showRouter.put("/:showId/watched", async (req, res) => {
    target = await Show.findOne({where: {id: req.params.showId, status: "watched"}})
    target.rating = req.body
})

showRouter.put("/:showId/updates", async (req, res) => {
    target = await Show.findOne({where: {id: req.params.showId}})
    await target.update(req.body)
    res.send(200)
})

showRouter.delete("/:showId", async (req, res) => {
    target = await Show.findOne({where: {id: req.params.showId}})
    await target.destroy();
    res.send(200)
})




module.exports = showRouter;