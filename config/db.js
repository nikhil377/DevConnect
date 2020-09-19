const mongoose = require('mongoose');
const config = require('config');
const db= config.get('mongoURI');

const connectDB = async()=>{
    try{
        await mongoose.connect(db,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log("congrats! you are connected to mongoDB");
        
    }
    catch(err){
        console.error("error connecting mongodb-> ", err.message);
        // exit app when failure occures
        process.exit(1);
        
    }
}
module.exports = connectDB;
