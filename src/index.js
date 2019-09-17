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

        } else if (playerTwo.hasClass('player-two--selected')){
            $(this).text('O');
            teUpPlayerOne();

        } return;
    });
     
    $('.restart').click(function(){
       console.clear();
       box.text('');
    })

})
