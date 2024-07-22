module.exports = function(app){
    app.get('/tribute',function(req,res){
        res.render('tribute');
    })

}