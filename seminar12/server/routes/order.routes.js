const express = require('express');
const Order = require('../database/models/Order');
const User = require('../database/models/User');

const router = express.Router();

router.get('/', async function(req, res) {
    try {
        const userId = req.userId;

        if(!userId) {
            return res.status(400).json({ success: false, message: "User Id not found", data: {} });
        }

        const orders = await Order.findAll({
            where: {
                userId: userId
            }
        });

        res.status(200).json(orders);
    } catch (error) {
        console.log(error);
        res.status(400).json({error: 'Server error'});
    }
})

router.post('/', async function(req, res) {
    try {
        const userId = req.userId;

        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(400).json({ success: false, message: "User not found", data: {} });
        }

        const order = await Order.create({
            ...req.body,
            userId: userId
        })

        return res.status(400).json({ success: false, message: "Order created", data: {order} });
    } catch (error) {
        console.log(error);
        res.status(400).json({error: 'Server error'});
    }
})

module.exports = router;