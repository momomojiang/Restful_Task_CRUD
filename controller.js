const Task = require("./models");
module.exports = {
    show_all: function(req,res){
        Task.find({}, function(err, tasks){
            if(err){
                res.json(err);
            }else{
                res.json(tasks);
            }
        }).sort({ id: -1 });
    },
    create_one:function(req,res){
        var new_task = new Task ({
            title:req.body.title,
            description:req.body.description,
            completed: req.body.completed,

        });
        new_task.save(function(err,tasks){
            if(err){
                res.json(err);
            }else{
                res.json("added!"+ tasks);
            }
        });
    },

    show_one:function(req, res){
        Task.findOne({_id:req.params.id}, function(err,tasks){
            if(err){
                res.json(err);
            }else{
                res.json(tasks);
            }
        });
        
    },
    update_one:function(req,res){
        Task.updateOne({_id:req.params.id},req.body,function(err,tasks){
            if(err){
                console.log(err);
            }else{
                res.json(tasks);
            }
        })
    },
    delete_one:function(req,res){
        Task.remove({_id:req.params.id},function(err){
            if(err){
                console.log(err);
            }else{
                res.redirect('/tasks')
            }
        })
    }

}