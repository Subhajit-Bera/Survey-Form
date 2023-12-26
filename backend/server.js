const express = require('express');
const cors = require('cors');
const app = express();
const dbConnect = require("./config/dbConnect");
dbConnect();


app.use(cors());
app.use(express.json());


// 
const survey = require("./routes/surveyRoute");


// Define API routes here
app.use("/api/v1",survey);




const PORT = process.env.PORT || 2030;
app.listen(PORT, (err) => {
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
  console.log(`Server is running on port ${PORT}`);
});