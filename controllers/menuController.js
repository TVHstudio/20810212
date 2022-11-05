const controller ={};
//const { reject } = require('lodash');
//const { promise } = require('selenium-webdriver');
const models = require('../models');
let Menu = models.Menu;
let Sequelize = require('sequelize');

controller.getAll = () => {
    return new Promise((resolve, reject) => {
        Menu
        .findAll({
            attributes : ['id','name','price','summary'],
            include :[{model : models.Menu}]
        })
        .then(data => resolve(data))
        .catch(error => reject(new Error(error)));
    });
};


module.exports = controller;