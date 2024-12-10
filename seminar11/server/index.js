const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const userRoutes = require('./routes/user.routes');
const orderRoutes = require('./routes/order.routes');
const authRoutes = require('./routes/auth.routes')
const User = require('./database/models/User');
const Order = require('./database/models/Order');
const { verifyToken } = require('./utils');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001;

User.hasMany(Order, { foreignKey: 'userId' });

app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/orders', verifyToken, orderRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port http://127.0.0.1:${PORT}`)
});
