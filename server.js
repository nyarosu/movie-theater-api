const express = require('express')
const app = express();
const { db, dataTypes } = require('./db')
const {userRouter, showRouter} = require('./routes')


app.use(express.json())
app.use("/users", userRouter)
app.use("/shows", showRouter)






app.listen(3001, async () => {
    await db.sync();
})