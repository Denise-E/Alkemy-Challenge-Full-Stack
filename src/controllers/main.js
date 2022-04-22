const sequelize = require('sequelize');
const db = require('../../database/models');
const op = sequelize.Op;

module.exports = {
    index: (req,res) =>{ 
        db.Operation.findAll({ order: [["id","DESC"]], limit: 10})
        .then((result) =>{
            res.render('home',{
                operations: result,
                style: 'home'
            })
        })
        .catch((err) => res.send(err));    
    }

}