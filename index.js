const express=require('express');
const port=8000;
const path=require('path');
const db=require('./config/mongoose');
const Contact=require('./models/contacts');
const app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

var contactList=[

];





app.use(express.urlencoded());
app.use(express.static('assests'));
app.get('/',function(req,res){
console.log(req.isAuthenticated);
Contact.find({},function(err,contacts){
    if(err){
        console.log("not able to find");
        return;
    }
    return res.render('home' ,{title :"I am boooo",
    contacts:contacts
    });
})
   

});
app.get('/delete-contact/',function(req,res){
    console.log(req.isAuthenticated);
console.log(req.query);
let id=req.query.id;
Contact.findByIdAndDelete(id,function(err){
    if(err){
        console.log("not able to delete");
        return;
    }
    res.redirect('back');
});
});




app.post('/create-contact',function(req,res){
Contact.create({
name:req.body.name,
phone:req.body.phone


},function(err,newContact){
if(err){
    console.log("error in creating the contact");
    return;
}
console.log('********',newContact);
return res.redirect('back');
})
});

 app.listen(port,function(err){
     if(err){
         console.log("the error is",err);
         return;
     }
     console.log('server is running well');
     
 });










