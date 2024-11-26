const express = require('express');
const Order = require('../database/models/Order');

const router = express.Router();

router.get('/', async function(req, res) {
    try {
        const orders = await Order.findAll();

        res.status(200).json(orders);
    } catch (error) {
        console.log(error);
        res.status(400).json({error: 'Server error'});
    }
})

module.exports = router;