const express = require('express');
const dotenv = require('dotenv');

const app = express();
const port = 3000;

dotenv.config();

// Set EJS as the view engine
app.set('view engine', 'ejs');
// Specify the views directory
app.set('views', __dirname + '/views');

// Import routes
const mainRoutes = require('./routes/mainRoutes');
// app.use('/', mainRoutes);

// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });
