const playerOne = $('.player-one');
const playerTwo = $('.player-two');
const box = $('.game__table--item');

$(document).ready(function(){
    function teUpPlayerOne(){
        playerOne.addClass('player-one--selected');
        playerTwo.removeClass('player-two--selected');   
    }
    function teUpPlayertwo(){
        playerTwo.addClass('player-two--selected');
        playerOne.removeClass('player-one--selected');
    }

    playerOne.click(teUpPlayerOne());
    playerTwo.click(teUpPlayertwo());

    box.click(function() { 
        // let text = (playerOne.hasClass('player-one--selected') ? $(this).text('X') : $(this).text('O'));
        if (playerOne.hasClass('player-one--selected')){
            $(this).text('X');
            $(this).addClass('cross');
            teUpPlayertwo();


           // console.log(box.find('#1').hasClass('cross')); // returns false
            // if (!box.find('#1').hasClass('cross') && !box.find('#2').hasClass('cross')) {
            //     console.log('cross wins');
            // }

        } else if (playerTwo.hasClass('player-two--selected')){
            $(this).text('O');
            $(this).addClass('naught');
            teUpPlayerOne(); 
        }
    });
    
    let winner = 0;
    
    if (box.find('#1').hasClass('cross')) {
        winner = 1;
        console.log(winner);
    }
    
    $('.restart').click(function(){
       console.clear();
       box.text('');
    });

    
    //check winner
    
});

// let xWinRule1 = $(['#1', '#2', '#3']).length === 3;
// let xWinRule2 = $(['#4', '#5', '#6']).length === 3;
// let xWinRule3 = $(['#7', '#8', '#9']).length === 3;
// let xWinRule4 = $(['#1', '#4', '#7']).length === 3;
// let xWinRule5 = $(['#2', '#5', '#8']).length === 3;
// let xWinRule6 = $(['#3', '#6', '#9']).length === 3;
// let xWinRule7 = $(['#1', '#5', '#8']).length === 3;
// let xWinRule8 = $(['#3', '#5', '#7']).length === 3;

// let oWinRule1 = $(['#1', '#2', '#3']).length === 3;
// let oWinRule2 = $(['#4', '#5', '#6']).length === 3;
// let oWinRule3 = $(['#7', '#8', '#9']).length === 3;
// let oWinRule4 = $(['#1', '#4', '#7']).length === 3;
// let oWinRule5 = $(['#2', '#5', '#8']).length === 3;
// let oWinRule6 = $(['#3', '#6', '#9']).length === 3;
// let oWinRule7 = $(['#1', '#5', '#8']).length === 3;
// let oWinRule8 = $(['#3', '#5', '#7']).length === 3;

// console.log(oWinRule2); // returns true

// let xWins = (xWinRule1 || xWinRule2 || xWinRule3 || xWinRule4 || xWinRule5 || xWinRule6 || xWinRule7 || xWinRule8);
// let oWins = (oWinRule1 || oWinRule2 || oWinRule3 || oWinRule4 || oWinRule5 || oWinRule6 || oWinRule7 || oWinRule8);

// if(xWins){
//     console.log('x wins');
// } else if (oWins){
//     console.log('o wins');
// } else {
//     console.log('no winner');
// }  

// }
// 1, 2, 3
// 4, 5, 6
// 7, 8, 9
// 1, 4, 7
// 2, 5, 8
// 3, 6, 9
// 1, 5, 9
// 3, 5, 7