const express = require("express");
const bodyParser = require("body-parser");

const port = 3000;

const app = express();

app.use(bodyParser.json());

//controller
var main_ctrl = require("./controllers/main_ctrl.js");

//endpoints
app.get("/name", main_ctrl.getName);

app.get("/location", main_ctrl.getLocation);

app.get("/occupations", main_ctrl.getOcc);

app.get("/occupations/latest", main_ctrl.getOccLatest);

//return object as array of objects in JSON objecty
app.get("/hobbies", main_ctrl.getHobbies);

app.get("/hobbies/:type", main_ctrl.getHobbiesType);

app.get("/family", main_ctrl.getFamily);

app.get("/family/:gender", main_ctrl.getFamilyGender);

app.get("/restaurants", main_ctrl.getRestaurants);

app.get("/restaurants/:name", main_ctrl.getResturantsName);

app.get("/skills", main_ctrl.getSkills);

// put endpoints
app.put("/name", main_ctrl.NameChange);

app.put("/location", main_ctrl.locationChange);

app.post("/hobbies", main_ctrl.addHobby);

app.post("/occupations", main_ctrl.addOccupations);

app.post("/family", main_ctrl.addFamily);

app.post("/restaurants", main_ctrl.addRestaurants);

app.post("/skills", main_ctrl.addSkills);

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});
