const express = require("express");
const user = require('./user.methods');
const router = express.Router();

router.get('/', async function (req, res) {
    try {
        const { name, age } = req.query;
        // const name = req.query.name;
        // const age = req.query.age;

        const dbUsers = await user.findMany({name, age})

        res.status(200).send(dbUsers);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.get('/:id', async function (req, res) {
    try {
        const userId = Number(req.params.id);

        if (isNaN(userId)) {
            throw new Error('User id not found');
        }

        const dbUser = await user.findOne(userId);

        res.status(200).json(dbUser);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.delete('/:id', async function(req, res) {
    try {
        const userId = Number(req.params.id);

        if (isNaN(userId)) {
            throw new Error('User id not found');
        }

        const deletedUser = await user.deleteOne(userId);

        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = router;
