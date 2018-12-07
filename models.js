const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restful_task',{ useNewUrlParser: true });
const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: 2 },
    description: { type: String, required: true, minlength: 3 },
    completed: { type:Boolean},
},{ timestamps: true });
module.exports = mongoose.model("Task", TaskSchema);
const Task = mongoose.model('Task');