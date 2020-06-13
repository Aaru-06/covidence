//volunteers.js

const { db } = require('../util/admin');
const { request, response } = require('express');

exports.getAllVolunteers = (request, response) => {
    db 
        .collection('covid-hack-5267d')
        .get()
        .then((data) => {
            let volunteers = [];
            data.forEach((doc) => {
                volunteers.push({
                    volunteerId: doc.id,
                    volunteerSkill: doc.data().Skills,
                    volunteerWork: doc.data().work  
                });
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