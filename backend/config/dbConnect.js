const mongoose = require("mongoose");


DB_URL="mongodb://localhost:27017/surveyApp";

const dbConnect = () => {
    mongoose.connect(DB_URL).then((data) => {
        console.log(`Mongodb connected with server: ${data.connection.host}`);
    });

    
}

module.exports = dbConnect;