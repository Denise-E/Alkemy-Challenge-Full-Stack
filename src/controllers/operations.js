
module.exports = {
    create: (req,res) => res.render('create',{
        style: 'create'
    }),
    edit: (req,res) =>res.render('edit',{
        style: 'edit'
    })
}