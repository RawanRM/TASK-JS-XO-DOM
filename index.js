// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
var turn ="❌"; //x always goes first
var unavailable = []; //array to store unavailable positions
var ob = {};
var obj_Keys = [];
var lenth = 1;

//WINNING CONDITIONS:
//let xrow1 = ob[1]==="X" && ob[2]==="X" && ob[3]==="X";
function fillButton(index, text) {
  // This function fills the button of the sent index
  document.getElementById(index).innerHTML = text;
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  if (confirm(`Horraaay, ${winner} wins!`)) {
    // The code here will be exectued if you press on OK button that will pop on the window
    while(Object.keys(ob).length >= lenth){
     delete ob[lenth];
     lenth++;
    }
    console.log(ob);
  }
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing
// fillButton(5, "X");
// fillButton(1, "O");
// fillButton(1, "❌");
// fillButton(5, "⭕");

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */

/**
   * first player puts X 
   * make spot unavailable.
   * HAVE TO DETECT smthng 
   * switch player val to O
   * 
   * IN PLAIN ENG:
   * keep track of position
   * if CURRENT position is taken
   * do nothing || when clicked the same value shows
   * if CURRENT position is available
   * add value in it
   * make THAT position unavailable
   * 
   * HOW TO IMPLEMENT IT:
   * 
   * create an unavailable bucket of positions
   * check if the CURRENT value is IN the array
   * if not:
   *  1-Allow player to play their turn
   *  2-PUSH current value to UNAVAILABLE array
   * 
   * WINNING:
   * ROWS:
   * row [1(1-2-3),2(4-5-6),3(7-8-9)] all x's or o's,
   * col [1(1,4,7),2(2,5,8),3(3-6-9)] all x's or o's,
   * diag [1,5,9]
   * diag [3,5,7]
   * 
   * xrow1 = ob[1]==="X" && ob[2]==="X" && ob[3]==="X";
   * if(){}
   */
 
function clickButton(index) {
  console.log(`Button number ${index} is clicked`);
  // Your main code here.
  //check if obj KEY is included in the OBJ 
  //CONVERT OBJ KEYS TO ARRAY
  

  obj_Keys = Object.keys(ob); //creates array of STRING keys
  console.log(obj_Keys);
   
   
  if(obj_Keys.includes(index.toString())){
    //do nothing
    console.log(`sorry unavailable `);

    if(turn==="⭕"){
      turn = "❌";
    }else{
      turn = "⭕";
    }
    alert("Cannot mark a taken heart.");

  }else{
    console.log(`its free `);
    fillButton(index, turn); 
    ob[index]=turn;
    console.log(ob);
    // unavailable.push(ob);
  }

    if(ob[1]==="❌" && ob[2]==="❌" && ob[3]==="❌"){
    winningAlert("Player ❌");
    }else if(ob[1]==="⭕" && ob[2]==="⭕" && ob[3]==="⭕"){
      winningAlert("Player ⭕");
    }else if(ob[4]==="❌" && ob[5]==="❌" && ob[6]==="❌"){
      winningAlert("Player❌");
    }else if(ob[4]==="⭕" && ob[5]==="⭕" && ob[6]==="⭕"){
      winningAlert("Player ⭕");
    }else if(ob[7]==="❌" && ob[8]==="❌" && ob[9]==="❌"){
      winningAlert("Player ❌");
    }else if(ob[7]==="⭕" && ob[8]==="⭕" && ob[9]==="⭕"){
      winningAlert("Player ⭕");
    }else if(ob[1]==="❌" && ob[4]==="❌" && ob[7]==="❌"){
      winningAlert("Player ❌");
    }else if(ob[2]==="❌" && ob[5]==="❌" && ob[8]==="❌"){
      winningAlert("Player ❌");
    }else if(ob[3]==="❌" && ob[6]==="❌" && ob[9]==="❌"){
      winningAlert("Player ❌");
    }else if(ob[1]==="⭕" && ob[4]==="⭕" && ob[7]==="⭕"){
      winningAlert("Player ⭕");
    }else if(ob[2]==="⭕" && ob[5]==="⭕" && ob[8]==="⭕"){
      winningAlert("Player ⭕");
    }else if(ob[3]==="⭕" && ob[6]==="⭕" && ob[9]==="⭕"){
      winningAlert("Player ⭕");
    }else if(ob[1]==="⭕" && ob[5]==="⭕" && ob[9]==="⭕"){
      winningAlert("Player ⭕");
    }else if(ob[3]==="⭕" && ob[5]==="⭕" && ob[7]==="⭕"){
      winningAlert("Player ⭕");
    }else if(ob[1]==="❌" && ob[5]==="❌" && ob[9]==="❌"){
      winningAlert("Player ❌");
    }else if(ob[3]==="❌" && ob[5]==="❌" && ob[7]==="❌"){
      winningAlert("Player ❌");
    }else{
      if(Object.keys(ob).length === 9){
        alert("⚡DRAW⚡");

      }
    }
 
   if(turn === "❌"){
     turn = "⭕";
     console.log(`MY TURN: ${turn} `);
    
   }else{
     turn = "❌";
     console.log(`MY TURN: ${turn} `);
   }

  }
 

/**
 * (Optional) It's always a good idea to make a function for every single purpose.
 */
// function checkWinner
// function restartGame
