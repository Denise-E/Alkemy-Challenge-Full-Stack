const { where } = require("sequelize");
const sequelize = require("sequelize");
const db = require('../../database/models');

module.exports = {
    create: (req,res) => res.render('create',{
        style: 'create'
    }),
    list: (req,res) => {
        db.Operation.findAll()
        .then(result => res.render('list', {
            operations: result,
            style: 'list'
        }))
    },
    edit: (req,res) =>{
        db.Operation.findByPk(req.params.id)
        .then((result) => res.render('edit',{
            operation: result,
            style: 'edit'
        }))
        .catch(err => res.send(err));
    },
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
        .then(() => res.redirect("/")) //AJUSTAR DESP A VISTA DINÁMICA DE LA OPERACIÓN
        .catch(err => res.send(err))
    },
    modify: (req, res) => {
        db.Operation.update(
            {
                description: req.body.description,
                value: req.body.total,
                date: req.body.date
            },{where: {id: req.params.id}})
        .then(() => res.redirect('/')) //AJUSTAR DESP A VISTA DINÁMICA DE LA OPERACIÓN
        .catch(err => res.send(err))
    }
     
}