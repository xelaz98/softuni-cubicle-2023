const handlebars = require('express-handlebars');

function handlebarsConfig(app) {
    //Handlebars configs
    app.engine('hbs', handlebars.engine({
        extname: 'hbs',
    }));

    app.set('view engine', 'hbs');
    app.set('views', 'src/views');
}

module.exports = handlebarsConfig;