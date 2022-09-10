const mongoose = require('mongoose');
const url = "mongodb://localhost/constact_list_db";
mongoose.connect(url);

const db = mongoose.connection;


db.on('error',console.error.bind(console,'connection error'));
db.once('open',function(){
    console.log('successfully connected to database!');
});
module.exports = db;