const container = document.querySelector(".container");
const userResult = document.querySelector(".user-result img");
const botResult = document.querySelector(".bot-result img");
const resultTxt = document.querySelector(".resultTxt");
const optionImg = document.querySelectorAll(".options-img");

// Loop through each option image element
optionImg.forEach((img, index) => {
  img.addEventListener("click", (e) => {
    img.classList.add("active");

    userResult.src = botResult.src = "images/rock.png";
    resultTxt.textContent = "Wait . . .";

    // Loop through each option image again
    optionImg.forEach((img2, index2) => {
      // If the current index doesnt match the clicked index
      // Remove the "active" class from the other option images
      index !== index2 && img2.classList.remove("active");
    });

    container.classList.add("active");

    // Set a timeout to delay the resultTxt calculation
    let w = setTimeout(() => {
      container.classList.remove("active");

      // Get the source of the clicked option image
      let imgSrc = e.target.querySelector("img").src;
      // Set the user image to the clicked option image
      userResult.src = imgSrc;

      // Generate a random number between 0 and 2
      let randomNumber = Math.floor(Math.random() * 3);
      // Create an array of bot image options
      let botimgs = ["images/rock.png", "images/paper.png", "images/scissors.png"];
      // Set the bot image to a random option from the array
      botResult.src = botimgs[randomNumber];

      // Assign a letter value to the bot option (R for rock, P for paper, S for scissors)
      let botChoice;
      if (randomNumber === 0) {
        botChoice = "rock";
      } else if (randomNumber === 1) {
        botChoice = "paper";
      } else {
        botChoice = "scissors";
      }

      // Assign a letter value to the user option (R for rock, P for paper, S for scissors)
      let userChoice;
      if (img.classList.contains("rock")) {
        userChoice = "rock";
      } else if (img.classList.contains("paper")) {
        userChoice = "paper";
      } else {
        userChoice = "scissors";
      }

      // Determine the winner and update the resultTxt
      let result = getWinner(userChoice, botChoice);
      resultTxt.textContent = result === "draw" ? "Draw" : `${result} Won!!`;
    }, 700);
  });
});

function getWinner(user, bot) {
  // Define the winning combinations
  let winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (user === bot) {
    return "draw";
  } else if (winConditions[user] === bot) {
    return "you";
  } else {
     return "bot";
   }
 }
 