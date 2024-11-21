const express = require('express');
const bodyParser = require('body-parser');
const schoolRoutes = require('./routes/schools');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('School Finder API');
})

// Routes
app.use('/api/schools', schoolRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    
});
