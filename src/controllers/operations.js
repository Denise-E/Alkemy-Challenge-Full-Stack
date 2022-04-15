const { where } = require("sequelize");
const sequelize = require("sequelize");
const db = require('../../database/models');

module.exports = {
    create: (req,res) => res.render('create',{
        style: 'create'
    }),
    edit: (req,res) =>res.render('edit',{
        style: 'edit'
    }),
    show: (req,res) => {
        db.Operation.findByPk(req.params.id)
        .then((result) =>res.render('show',{
            operation: result,
            style: 'show'
        }))
        .catch((err) => res.send(err));
    },
    save: (req,res) => {
      db.Operation.create({
            type: req.body.operationType,
            description: req.body.description,
            value: req.body.total,
            date: req.body.date
        })
        .then(() => res.redirect("/home")) //AJUSTAR DESP A VISTA DINÁMICA DE LA OPERACIÓN
        .catch(err => res.send(err))
    },
    /*
    modify: (req, res) => {
        db.Operation.update(
            {
                description: req.body.description,
                value: req.body.total,
                date: req.body.date
            }
            ,{where: req.params.id})
    }*/
}