const controller ={};
//const { reject } = require('lodash');
//const { promise } = require('selenium-webdriver');
const models = require('../models');
let Booking = models.Booking;
let Sequelize = require('sequelize');

controller.getAll = () => {
    return new Promise((resolve, reject) => {
        Booking
        .findAll({
            attributes : ['id','name','price','summary'],
            include :[{model : models.Booking}]
        })
        .then(data => resolve(data))
        .catch(error => reject(new Error(error)));
    });
};


module.exports = controller;