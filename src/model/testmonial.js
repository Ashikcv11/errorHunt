const mongoose = require('mongoose')
// const uri = process.env.MONGODB_URI;

// mongoose.connect(uri)
// .then((res)=>{
//     console.log('database connected successfuly');
// }).catch((err)=>{
//     console.log('an error occured'+err);
// })

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then(()=>{
    console.log("Database Connection Successful...")
}).catch((err)=>{
 console.log(err)
});

const Schema = mongoose.Schema;
// const testmoSchema = new mongoose.Schema({
    var testmoSchema = new Schema({

    person:String,
    role:String,
    message:String,
    image:String
})

const testModel = mongoose.model('test',testmoSchema)

module.exports=testModel
