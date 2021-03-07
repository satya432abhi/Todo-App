const Todo = require("../models/Todo");

module.exports.home = function(req,res){
    // res.end('<h1>Todo App is ready to be built</h1>');

    Todo.find({},function(err,todo_list)
    {
        
        if(err)
        {
            console.log('error in fetching from the database');
            return;
        }
       
        return res.render('home',{
          title: "TODO App",
          list : todo_list,
        });
    });
};