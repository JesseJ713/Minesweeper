// Ensuring that HTML loads before JS
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  let width = 10;
  let squares = [];

  //Function to create the board
  function createBoard() {
    for (let i = 0; i < width * width; i++) {
      const square = document.createElement("div");            //Creating div squares for our board
      square.setAttribute("id", i);                            //Labeling each div with an ID as the loop runs
      grid.appendChild(square);                                //Appending new divs into our grid
      squares.push(square);                                    //Assigning new divs into our global array
    }
  }

  createBoard();                                               //Calling function to create the board

  
});
