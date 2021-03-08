const express = require('express');
const app = express();

const db = require('./config/mongoose');
const Todo = require('./models/Todo');

const port = 8000;
//use express router
app.use('/',require('./routes/index'));

//set ejs as the view-engine for express
app.set('view engine','ejs');
app.set('views','./views');


/*used as middle-ware or as a parser*/
app.use(express.urlencoded());
app.use(express.static('assets'));

app.post('/Add-task',function(req,res){

    Todo.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.deadline,

    },function(err,newTask){
        if(err)
        {
            console.log("error in adding a task!",err);
            return ;
        }
        console.log('********',newTask);
        return res.redirect('back');
    });
    
    console.log(req);
    //  return res.redirect('/');
    // return res.redirect('back');
    console.log(req.body.description);
    console.log(req.body.category);
});

app.get('/delete-list',function(req,res){
    let id= req.query.id;
    Todo.findByIdAndDelete(id,function(err){
        if(err)
        {
            console.log('error in deleting a list item');
            return;
        }
        return res.redirect('back');
    });
});

app.listen(port,function(err){
    if(err)
    {
        console.log(`Error :${err}`);
    }
    
    console.log(`Server is running successfully on the port: ${port}`);
});
