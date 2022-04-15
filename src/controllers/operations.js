const sequelize = require("sequelize");
const db = require('../../database/models');

module.exports = {
    create: (req,res) => res.render('create',{
        style: 'create'
    }),
    edit: (req,res) =>res.render('edit',{
        style: 'edit'
    }),
    save: (req,res) => {
      db.Operation.create({
            type: req.body.operationType,
            description: req.body.description,
            value: req.body.total,
            date: req.body.date
        })
        .then(() => res.redirect("/home")) //AJUSTAR DESP A VISTA DINÁMICA DE LA OPERACIÓN
        .catch(err => res.send(err))
    }
}