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
        if (playerOne.hasClass('player-one--selected')){
            $(this).text('X');
            teUpPlayertwo();
           
           // console.log($(this).text());

        } else if (playerTwo.hasClass('player-two--selected')){
            $(this).text('O');
            teUpPlayerOne();

        } return;
    });
    
    $('.restart').click(function(){
       console.clear();
       box.text('');
    })
   
//    console.log(box[0]);
})
// winning combinations 

    if(box[0].text() === 'x'){
        console.log('worked');
    }

// 1, 2, 3
// 4, 5, 6
// 7, 8, 9
// 1, 4, 7
// 2, 5, 8
// 3, 6, 9
// 1, 5, 9
// 3, 5, 7