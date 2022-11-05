const controller ={};
//const { reject } = require('lodash');
//const { promise } = require('selenium-webdriver');
const models = require('../models');
var Booking = models.Booking;
let Sequelize = require('sequelize');

controller.getAll = (query) => {
    return new Promise((resolve, reject) => {
        let options = {         
                attributes: ['id','name', 'imagepath','summary'],
                include: [{ 
                    model : models.Product,
                    where : {}
                }]            
        }
        if(query && query.search != ''){
            options.include[0].where.name = {
                [Op.iLike]: `%${query.search}%`
            }
        }
        Booking
        .findAll(options)
        .then(data => resolve(data))
        .catch(error => reject(new Error(error)));
    });
};


module.exports = controller;