const userModel = require("../models/UserModel.js")
const express = require("express")

const routes = express.Router()
// routes.use((req, res, next) => {
//     console.log('Time: ', Date.now())
//     next()
// })


routes.post('/signup', async (req, res) => {
    const newUser = new userModel(req.body)
    try {
        await newUser.save()
        res.status(201).send(newUser)
    } catch (error) {
        console.log(error)
        res.status(601).send(error)
    }
});

routes.post('/login', async (req, res) => {
    try {
        const user = await userModel.findOne({username:req.body.username})
        if (user && user.password === req.body.password) {
            res.status(200).send({status:"logged in"})
        }
        else {
            res.status(404).send({status:"failed", msg:"invalid username or password"})
        }
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }

});

routes.get('/', async (req, res) => {
    const users = await userModel.find()
    res.status(200).send(users)
});

module.exports = routes;