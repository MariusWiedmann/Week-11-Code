$( document ).ready( () => {

    let array = [];  //will use to compare to possible winning combinations?
    let turn = true; //switches back and forth for game functionality
    let turnNumber = 1; 
    let reset = $('#reset-button'); //variable to manipulate reset button 

//Adds X's and O's 
    for (let i = 0; i < 9; i++) {
        let td = $(`#${i + 1}`);
        td.on('click', () => {
            if (turn) {
                td.text('X').addClass('XandO');
                turn = false;
                turnCounter();
            } else {
                td.text('O').addClass('XandO');
                turn = true;
                turnCounter();
            }
        });
        array.push(td);
    };

//Counts turns
    function turnCounter() {
        if( turnNumber < 5 ) {
            turnNumber++;
        } else {
            if (checkForWin(turnNumber)) {
                //alert winner by using a CSS Bootstrap class
            }
        }
    };

//Checks for winner after 5 turns 
    function checkForWin(x) {
        if ( x > 9 ) {
            return false;
        } else {
            console.log(array);
            /*need to do something to compare the array to possible winning combinations?
            let winningCombos = [
                [1, 2, 3],
                [4, 5, 6], 
                [7, 8, 9], 
                [1, 5, 9],  
                [3, 5, 7], 
                [1, 4, 7], 
                [2, 5, 8], 
                [3, 6, 9]
            ];
            maybe use this: checker = (arr, target) => target.every(x => arr.includes(x));
            */
        }
    };

    //functionality for reset button
    reset.on('click', () => {
        let cells = $("td");
        cells.text('');
        turn = true;
        turnNumber = 1;
        array = [];
    });

});




