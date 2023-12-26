const express = require("express");
const router = express.Router();
const{postSurvey,getAllSurvey,getSurveyDetails}=require("../controller/surveyController");

router.route("/submit-survey").post(postSurvey);

router.route("/surveys").get(getAllSurvey);
router.route("/survey/:id").get(getSurveyDetails);

module.exports=router;