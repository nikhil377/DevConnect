const express = require('express');
const app = express();
const connectDB = require('./config/db');

// connect db
connectDB();

const PORT = process.env.PORT || 5000;

// endpoint , path
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    
})