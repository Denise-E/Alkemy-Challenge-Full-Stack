const sequelize = require('sequelize');
const db = require('../../database/models');
const op = sequelize.Op;

module.exports = {
    index: (req,res) =>{ 
        let lastTen = db.Operation.findAll({ order: [["id","DESC"]], limit: 10});
        let allOp = db.Operation.findAll();
        Promise.all([lastTen, allOp])
        .then(([lastTen, allOp]) =>{
           // res.send(allOp);
                res.render('home',{
                operations: lastTen,
                all: allOp,
                style: 'home'
            })
            })
        .catch((err) => res.send(err));    
    }

}