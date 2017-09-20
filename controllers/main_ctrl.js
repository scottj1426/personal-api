var user = require("../user.js").user;
var skills = require("../skills.js");
const getName = (req, res, next) => {
  console.log(user.name);
  return res.json({ name: user.name });
};

const getLocation = (req, res, next) => {
  console.log(user.location);
  return res.json({ location: user.location });
};
const getOcc = (req, res, next) => {
  console.log(user.occupations);
  if (req.query.order === "asc") {
    return res.json({ occupations: user.occupations.sort().reverse() });
  }
  if ((req.query.order = "desc")) {
    return res.json({ occupations: user.occupations.sort() });
  }
  return res.json({ occupations: user.occupations });
};

const getOccLatest = (req, res, next) => {
  console.log(user.occupations);
  return res.json({ latest: user.occupations.slice(-1) });
};

const getHobbies = (req, res, next) => {
  console.log(user.hobbies);
  return res.json({ hobbies: user.hobbies });
};

const getHobbiesType = (req, res, next) => {
  console.log(user.hobbies);
  res.json(user.hobbies.filter(x => x.type == req.params.type));
};

const getFamily = (req, res, next) => {
  console.log(user.family);
  if (req.query.relation) {
    res.json(
      user.family.filter(family => family.relation === req.query.relation)
    );
  } else {
    return res.json({ family: user.family });
  }
};
const getFamilyGender = (req, res, next) => {
  console.log(user.family.gender);
  res.json(user.family.filter(x => x.gender == req.params.gender));
};

const getRestaurants = (req, res, next) => {
  if (req.query.rating == "gte:2") {
    res.json({ restaurants: user.restaurants.filter(x => x.rating > 2) });
  } else {
    return res.json({ restaurants: user.restaurants });
  }
};

const getResturantsName = (req, res, next) => {
  console.log(user.restaurants.name);
  res.json(user.restaurants.filter(x => x.name == req.params.name));
};

const NameChange = (req, res, next) => {
  user.name = req.body.name;
  res.json(user);
};

const locationChange = (req, res, next) => {
  user.location = req.body.location;
  res.json(user);
};

const addHobby = (req, res, next) => {
  user.hobbies.push(req.body);
  res.json(user).hobbies;
};
const addOccupations = (req, res, next) => {
  user.occupations.push(req.body);
  res.json(user).occupations;
};
const addFamily = (req, res, next) => {
  user.family.push(req.body);
  res.json(user).family;
};
const addRestaurants = (req, res, next) => {
  user.restaurants.push(req.body);
  res.json(user).restaurants;
};

const getSkills = (req, res, next) => {
  console.log(user.family);
  if (req.query.experience) {
    res.json(
      skills.skills.filter(skills => skills.experience === req.query.experience)
    );
  } else {
    return res.json({ skills: skills.skills });
  }
};

const addSkills = (req, res, next) => {
  var id = skills.skills.length + 1;
  skills.skills.push({
    id: id,
    name: req.body.name,
    experience: req.body.experience
  });
  res.json(skills.skills);
};

module.exports = {
  getName,
  getLocation,
  getOcc,
  getOccLatest,
  getHobbies,
  getHobbiesType,
  getFamily,
  getFamilyGender,
  getRestaurants,
  getResturantsName,
  NameChange,
  addHobby,
  locationChange,
  addHobby,
  addOccupations,
  addFamily,
  addRestaurants,
  getSkills,
  addSkills
};
