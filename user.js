const user = {
  name: "Joe Smoe",
  location: "Dallas, Texas",
  occupations: ["Full Stack Developer", "Half Stack Developer"],
  hobbies: [
    {
      name: "Racing",
      type: "Motocross"
    },
    {
      name: "Gaming",
      type: "League Of Legends"
    },
    {
      name: "Web Development",
      type: "Angular, Node"
    }
  ],
  family: [
    {
      name: "Karen Smoe",
      relation: "Wife",
      gender: "Female"
    },
    {
      name: "Jack Smoe",
      relation: "Son",
      gender: "Male"
    },
    {
      name: "Jill Smoe",
      relation: "Daughter",
      gender: "Female"
    }
  ],
  restaurants: [
    {
      name: "Zaxbys",
      type: "Fast Food",
      rating: 1
    },
    {
      name: "AppleBee's",
      type: "Bar & Grill",
      rating: 3
    },
    {
      name: "ColdStone",
      type: "Icecream Shop",
      rating: 2
    }
  ]
};

module.exports = {
  user
};
