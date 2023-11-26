const express = require('express');
const path = require('path');

function expressConfig(app) {
    //Express configs
    app.use(express.static(path.resolve(__dirname, '../public')));
    app.use(express.urlencoded({extended: false}));
    //app.use(express.static('src/public));

}

module.exports = expressConfig;