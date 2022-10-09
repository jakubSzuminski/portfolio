const express = require('express');
const cors = require('cors');

const addMiddleware = (app) => {
    app.use(express.json());

    if(!process.env.NODE_ENV || process.env.NODE_ENV === 'development') app.use(cors());
}

module.exports = addMiddleware;