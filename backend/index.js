const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
//const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDb = require('./config/db');
const userRoutes = require('./routes/userRoute');
const adminRoutes = require('./routes/adminRoute');
const mentoerRoutes = require('./routes/mentorRoute'); 


const PORT = process.env.PORT || 5000;
connectToDb.connectDB();

//app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/users', userRoutes);
app.use('/mentors',mentoerRoutes);
app.use('/Admin', adminRoutes);
app.use('/api/v1/session', require('./routes/session'));
//app.use('/api/v1/payment', require('./routes/PaymentRoute'));



app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});


module.exports = app;