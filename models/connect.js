const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Data Base connected');
}).catch((err) =>{
    console.log(err);
})