const db = require('../models/db');

exports.homePage = (req, res) => {
    const query = 'SELECT * FROM controls'; // Example SQL query
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.render('error', { message: 'Error fetching data' });
            return;
        }
        // Render the 'index' view and pass the data
        res.render('index', { 
            pageTitle: 'Home Page', 
            controls: results 
        });
    });
};
