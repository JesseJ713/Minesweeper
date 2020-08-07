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
      square.classList.add(shuffledArray[i]);                  //This will reference back to the shuffled index and label the div with the corresponding string inside of it
      grid.appendChild(square);                                //Appending new divs into our grid
      squares.push(square);                                    //Assigning new divs into our global array
    }

    //Adding functionality so that the squares can detect bombs around them 
    for (let i = 0; i < squares.length; i++) {
      let total = 0;
      const isLeftEdge = (i % width === 0);                    // Defining the left edge of board so that squares do not consider those that aren't visibly next to them               
      const isRightEdge = (i % width === width - 1);           // Defining the right edge of board so that squares do not consider those that aren't visibly next to them
      
      if (squares[i].classList.contains("valid")) {
        if (i > 0 && !isLeftEdge && squares[i-1].classList.contains("bomb")) total++;                      //Checking West
        if (i > 9 && !isRightEdge && squares[i+1-width].classList.contains("bomb")) total ++;              //Checking North East
        if (i > 10 && squares[i - width].classList.contains("bomb")) total ++;                             //Checking North
        if (i > 11 && !isLeftEdge && squares[i-1-width].classList.contains("bomb")) total ++;              //Checking North West
        if (i < 98 && !isRightEdge && squares[i+1].classList.contains("bomb")) total++;                    //Checking East
        if (i < 90 && !isLeftEdge && squares[i-1+width].classList.contains("bomb")) total++;               //Checking South West
        if (i < 88 && !isRightEdge && squares [i+1+width].classList.contains("bomb")) total++;             //Checking South East
        if (i < 89 && squares[i+width].classList.contains("bomb")) total++;                                //Checking South


        squares[i].setAttribute("data", total);
        console.log(squares[i]);
      }
    }






  }

  createBoard();                                               //Calling function to create the board

  
});
