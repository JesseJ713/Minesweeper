// Ensuring that HTML loads before JS
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  let width = 10;
  let squares = [];
  let bombAmount = 20;

  //Function to create the board
  function createBoard() {

    //Randomizing bombs to stick within the board
    const bombsArray = Array(bombAmount).fill("bomb");                          //Creating array of 'bomb' strings to place in divs
    const emptyArray = Array(width*width - bombAmount).fill("valid");           //Creating array of 'valid' strings to place in divs
    const gameArray = emptyArray.concat(bombsArray);                            //Joining the two 'bomb' and 'valid' arrays
    const shuffledArray = gameArray.sort(() => Math.random() -0.5);             //Randomly shuffling 'bomb' and 'valid' within the array

    for (let i = 0; i < width * width; i++) {
      const square = document.createElement("div");            //Creating div squares for our board
      square.setAttribute("id", i);                            //Labeling each div with a unique ID as the loop runs
      grid.appendChild(square);                                //Appending new divs into our grid
      squares.push(square);                                    //Assigning new divs into our global array
    }
  }

  createBoard();                                               //Calling function to create the board

  
});
