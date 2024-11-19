const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../database/models/User');
const router = express.Router();

router.get('/', async function(req, res) {
    try {
        const users = await User.findAll({
            attributes: {
                exclude: ['password']
            }
        });

        res.status(200).json(users);
    } catch (error) {
        console.log(error);
    }
})

router.get('/:id', async function(req, res) {
    try {
        const id = req.params.id;

        if (isNaN(id)) {
            throw new Error('Is is invalid');
        }

        const user = await User.findByPk(id, {  
            attributes: {
                exclude: ['password']
            }
        })

        res.status(200).json(user);
    } catch (error) {
        console.log(error)
    }
})

router.post('/', async function(req, res) {
    try {
        const { username, password, role } = req.body;

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const user = await User.create({
            username,
            role,
            password: hash,
        })

        delete user.dataValues.password;

        res.status(201).json(user);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;

// npm i bcrypt