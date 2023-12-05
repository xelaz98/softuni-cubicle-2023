const express = require('express');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const homeController = require('./controllers/homeController');

const app = express();
const PORT = 5000;

expressConfig(app);
//require('./config/expressConfig')(app); - SAME AS ABOVE

handlebarsConfig(app);

app.get('/', homeController.getHome);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); 