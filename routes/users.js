const express = require('express')
const userRouter = express.Router();
const {User, Show} = require("../models")

userRouter.get("/", async (req, res) => {
    res.send(await User.findAll())
})

userRouter.get("/:id", async (req, res) => {
    res.send(await User.findOne({where: {id: req.params.id}}))
})

userRouter.get("/:id/shows", async (req, res) => {
    target = await User.findOne({where: {id: req.params.id}})
    res.send(await target.getShows())
})

userRouter.put("/:id/shows/:showId", async (req, res) => {
    target = await Show.findOne({where: {id: req.params.showId}})
    await User.addShow(target);
    res.sendStatus(200);
})


module.exports = userRouter;