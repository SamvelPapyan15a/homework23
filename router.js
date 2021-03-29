module.exports = function(app){
    app.use('/homework1',require('./routes/homework1'));
    app.use('/users',require('./routes/users'));
}