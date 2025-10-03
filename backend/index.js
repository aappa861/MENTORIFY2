const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
// const cors = require('cors');
const app = express();

const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");


const { connectDB } = require("./config/db");
const connectCloudinary = require("./config/cloudinary");

const userRoutes = require('./routes/userRoute');
const adminRoutes = require('./routes/adminRoute');




const mentorRoutes = require('./routes/mentorRoute'); 
const sessionRoutes = require("./routes/sessionRoutes");


const PORT = process.env.PORT || 5000;


//app.use(cors());
app.use(fileUpload());

// Connect DB
dotenv.config();
connectDB();
connectCloudinary();

// Middlewares
// app.use(cors());
//981118ad6c739df55fcab3e2f75f565dcb3b66c4
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ Add file upload middleware
//app.use(express.json());
//app.use(cookieParser());
app.use(
  cors({
    origin: true, 
    credentials: true,
  })
);
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);


// Test route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Routes
app.use('/users', userRoutes);
app.use('/mentors', mentorRoutes);
app.use('/admin', adminRoutes);
app.use('/session', sessionRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

module.exports = app;
