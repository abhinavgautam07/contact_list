const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/contacts_list_db');
const db=mongoose.connection; //gives acess to database
// if error
db.on('error', console.error.bind('error connecting to db '));
// if success
db.once('open',function(){
    console.log("success");
});