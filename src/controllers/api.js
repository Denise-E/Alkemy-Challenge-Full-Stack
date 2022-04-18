const db = require('../../database/models');
const sequelize = require("sequelize");
const { all } = require('../routes/api');

module.exports = {
    list: (req,res) => {
        db.Operation.findAll()
        .then( result => {
            let operations = {
                all: [],
                meta: {
                    status: 200, 
                    url: 'api/'
                }
            }

            result.forEach( (operation) => {
                operations.all.push({
                    id: operation.id,
                    type: operation.type,
                    description: operation.description,
                    value: operation.value,
                    date: operation.date
                })
            });

            return res.json(operations);
        })
        .catch(err => {
            let result = {
                err,
                meta: {
                    status: 400,
                    url: 'api/'
                }
            }
            return res.json(result);
        })

    }
}