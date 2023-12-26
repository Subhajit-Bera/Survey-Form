const Survey = require("../model/survey");
const asyncHandler =require("express-async-handler");

module.exports.postSurvey= asyncHandler(async(req,res)=>{
    const{name,gender,nationality,email,phone,address,message}=req.body;
    const existSurvey=await Survey.findOne({email:email});
    if(existSurvey){
        // throw new Error("You already submit the response");
        res.status(201).json({
            status: "failed",
            message: "You already submit the response",
        });
    }
    const survey=await Survey.create({
        name,
        gender,
        nationality,
        email,
        phone,
        address,
        message
    });

    await survey.save();

    res.status(201).json({
        status: "success",
        message: "Form Submitted Successfully",
    });
})




module.exports.getAllSurvey=asyncHandler(async(req,res)=>{
    const survey =await Survey.find();
    res.status(201).json({
        status: "success",
        message: "All survey fetch Successfully",
        survey
    });
});

module.exports.getSurveyDetails=asyncHandler(async(req,res)=>{
    const survey =await Survey.findById(req.params.id);
    res.status(201).json({
        status: "success",
        message: "Survey fetch Successfully",
        survey
    })
})