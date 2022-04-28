const sequelize = require("sequelize");
const db = require('../../database/models');

module.exports = {
    create: (req,res) => res.render('create',{
        style: 'create'
    }),
    list: (req,res) => {
        db.Operation.findAll({order: [["id","DESC"]]})
            .then(result => res.render('list', {
                operations: result,
                style: 'list'
            }))
            .catch(err => res.send(err))
    },
    incomes: (req,res) => {
        db.Operation.findAll({where: {type: 'ingreso'}})
            .then(result => res.render('incomes', { 
                incomes: result,
                style: 'incomes'
            }))
            .catch(err => res.send(err))
    },
    outcomes: (req,res) => {
        db.Operation.findAll({where: {type: 'egreso'}})
            .then(result => res.render('outcomes', { 
                outcomes: result,
                style: 'outcomes'
            }))
            .catch(err => res.send(err))
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
            value: parseInt(req.body.total),
            date: req.body.date
        })
        .then(() => res.redirect("/"))
        .catch(err => res.send(err))
    },
    modify: (req, res) => {
        db.Operation.update({
            description: req.body.description,
            value: parseInt(req.body.total),
            date: req.body.date
        }, {where: {id: req.params.id}})
        .then(() => res.redirect('/operations/' +req.params.id))
        .catch(err => res.send(err))
    }    
}