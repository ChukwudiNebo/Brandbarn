const express = require('express');
const connectDB = require('./config/db')


const app = express();

// Require cors
var cors = require('cors')

app.use(cors());


// Connect Database
connectDB();


// Init Middleware
app.use(express.json({ extended: false }));


// this was pushed to heroku app and it was output to the browser live
// app.get('/', (req, res, next) =>
// {
//     res.status(200).json({
//         status: 'success',
//         data: {name: 'success'}
//     })
// })


//Define Routes
app.use('/api/users', require('./route/api/user'));
app.use('/api/auth', require('./route/api/auth'));
// app.use('/api/profile', require('./route/api/profile'));
// app.use('/api/posts', require('./route/api/posts'));




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`) );


