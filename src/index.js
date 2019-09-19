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
        }

        if(findWinner() != -1 && findWinner() != ""){
            if(findWinner() === 'X'){
                playerOne.append('<p class="player-one--score">Winner :)</p>');
                return
            } else  if (findWinner() === 'O'){
                playerTwo.append('<p class="player-two--score">Winner :)</p>');
                return
            } else {
                $('body').append('<div>Draw</div>')
            }
         }
    });
    function findWinner(){
        boxes = {
            item1: $('#1').text(),
            item2: $('#2').text(),
            item3: $('#3').text(),
            item4: $('#4').text(),
            item5: $('#5').text(),
            item6: $('#6').text(),
            item7: $('#7').text(),
            item8: $('#8').text(),
            item9: $('#9').text(),
        }
        matches = {
            match1: boxes.item1 == boxes.item2 && boxes.item2 == boxes.item3
        }
        console.log(matches.match1);
        if ((boxes.item1 == boxes.item2) && (boxes.item2 == boxes.item3)){
            return boxes.item3;
        } else if ((boxes.item4 == boxes.item5) && (boxes.item5 == boxes.item6)){
            return boxes.item6;
        } else if ((boxes.item7 == boxes.item8) && (boxes.item8 == boxes.item9)) {
            return boxes.item9;
        } else if ((boxes.item1 == boxes.item4) && (boxes.item4 == boxes.item7)){
            return boxes.item7;
        } else if ((boxes.item2 == boxes.item5) && (boxes.item5 == boxes.item8)) {
            return boxes.item8;
        } else if ((boxes.item3 == boxes.item6) && (boxes.item6 == boxes.item9)) {
            return boxes.item9;
        } else if ((boxes.item1 == boxes.item5) && (boxes.item5 == boxes.item9)) {
            return boxes.item9;
        } else if ((boxes.item3 == boxes.item5) && (boxes.item5 == boxes.item7)) {
            return boxes.item7;
        }   return -1;
    }
    
    $('.restart').click(function(){
        console.clear();
        box.text('');
    });
});