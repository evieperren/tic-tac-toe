const playerOne = $('.player-one');
const playerTwo = $('.player-two');
const box = $('.game__table--item');

$(document).ready(function(){

    playerOne.click(function(){
        playerOne.addClass('player-one--selected');
        playerTwo.removeClass('player-two--selected');
        
    });

    playerTwo.click(function () {
        playerTwo.addClass('player-two--selected');
        playerOne.removeClass('player-one--selected');

    });

    box.click(function(){ 

        if (playerOne.hasClass('player-one--selected')){
            console.log('x should show');
            console.log(this);
            playerTwo.addClass('player-two--selected');
            playerOne.removeClass('player-one--selected');

        } else if (playerTwo.hasClass('player-two--selected')){
            console.log('o should show');
            console.log(this);
            playerOne.addClass('player-one--selected');
            playerTwo.removeClass('player-two--selected');

        } return;
    });
     
    $('.restart').click(function(){
       console.clear();
    })

})
