const controller = require("./controller");
module.exports = function(app){
    app.get('/tasks', controller.show_all);
    app.post('/task', controller.create_one);
    app.get('/show/:id',controller.show_one);
    app.put('/update/:id',controller.update_one);
    app.delete('/delete/:id',controller.delete_one);

}