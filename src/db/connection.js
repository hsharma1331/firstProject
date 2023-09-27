// const process=require('process')
// const path = require('path');
// require('dotenv').config({ path: path.resolve(__dirname, './.env') });
// console.log(path.resolve(__dirname, './.env'))
require('dotenv').config()  //importing the env file


// ==========for local host==========


// const mongoose = require('mongoose')
// mongoose.connect("mongodb://localhost:27017/nodeDB", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log('mongo connected successfully');
// }).catch((e) => {
//     console.log(`mongo not connected and the error is ${e}`);
// })








// =========for live mongo server==============


const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
    // useFindAndModify: false
}
).then(() => {
    console.log('mongo connected successfully');
}).catch((e) => {
    console.log(`mongo not connected and the error is ${e}`);
})
