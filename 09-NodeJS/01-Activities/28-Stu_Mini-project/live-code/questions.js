module.exports = [
  {
    message: "What is your name?",
    name: "username",
    default: "chadlikeshair",
  },
  {
    message: "Do you like dogs?",
    name: "likeDog",
    type: "confirm",
    default: true,
  },
  {
    message: "Do you like to party?",
    name: "likeParty",
    type: "confirm",
    default: false,
  },
  {
    message: "What are you looking for in a relationship?",
    name: "goals",
    default: "Anything that breathes",
  },
  {
    message: "Please enter an image for your profile!",
    name: "imageURL",
    default:
      "https://static.onecms.io/wp-content/uploads/sites/6/2014/08/hello-kitty.jpg",
    validate: (input) =>
      typeof input === "string" && /^http.+\.\w{2,5}/.test(input)
        ? true
        : "THIS IS NOT A VALID URL",
  },
];
