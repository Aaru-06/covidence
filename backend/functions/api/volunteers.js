//volunteers.js

const { db } = require('../util/admin');
const { request, response } = require('express');

exports.getAllVolunteers = (request, response) => {
    db 
        .collection('Volunteers-Registers')
        .get()
        .then((data) => {
            let volunteers = [];
            data.forEach((doc) => {
                volunteers.push(
                    doc.data()    
                );
            });
            return response.json(volunteers);
        })
        .catch((err) => {
            console.error(err);
            return response.status(500).json({
                error: err.code
            });
            
        });
};