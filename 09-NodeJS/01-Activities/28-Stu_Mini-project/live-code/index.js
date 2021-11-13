const fs = require("fs");
//obj destructure prompt method
const { prompt } = require("inquirer");
const questions = require("./questions.js");
const init = async () => {
  const { username, likeDog, likeParty, goals, imageURL } = await prompt(
    questions
  );
  const template = `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <title>${username}'s Dating Profile</title>
  </head>
  <body>
    <h1>HELLO MY NAME IS ${username}</h1>
    <div class="card" style="width: 18rem">
      <img src="${imageURL}" class="card-img-top" alt="dating profile img" />
      <div class="card-body">
        <h5 class="card-title">${username}</h5>
        <p class="card-text">
          Hello my name is ${username}, 
          ${`I ${!likeDog && "don't"} like dogs`}.
          ${`I ${!likeParty && "don't"} like parties`}
          I am looking for ${goals}
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </body>
</html>
    `;

  fs.writeFileSync("./profile.html", template);
  console.info("SUCCESS!");
};

init();
