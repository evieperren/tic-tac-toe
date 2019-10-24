// be in a constructor
const playerOne = $('.player-one');
const playerTwo = $('.player-two');
const box = $('.game__table--item');

$(document).ready(function(){
    // better names
    // change to store data in javascript and not depend on styling
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
            // jquery interface
            $(this).text('X');
            teUpPlayertwo();
        
        } else if (playerTwo.hasClass('player-two--selected')){
            $(this).text('O');
            teUpPlayerOne();
        }

        // does not need to call function find winner 4 times, the return value should be stored in a variable
        if(findWinner().matches != -1 && findWinner().matches != ""){
            if(findWinner() === 'X'){
                // could be done with create element instead
                playerOne.append('<p class="player-one--score">Winner :)</p>');
                return
            } else  if (findWinner() === 'O'){
                playerTwo.append('<p class="player-two--score">Winner :)</p>');
                return
            } else {
                // needs fixing 
                $('body').append('<div>Draw</div>')
            }
         }
    });
    function findWinner(){
        // this should return true or false 
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
            match1: (boxes.item1 == boxes.item2) && (boxes.item2 == boxes.item3),
            match2: (boxes.item4 == boxes.item5) && (boxes.item5 == boxes.item6),
            match3: (boxes.item7 == boxes.item8) && (boxes.item8 == boxes.item9),
            match4: (boxes.item1 == boxes.item4) && (boxes.item4 == boxes.item7),
            match5: (boxes.item2 == boxes.item5) && (boxes.item5 == boxes.item8),
            match6: (boxes.item3 == boxes.item6) && (boxes.item6 == boxes.item9),
            match7: (boxes.item1 == boxes.item5) && (boxes.item5 == boxes.item9),
            match8: (boxes.item3 == boxes.item5) && (boxes.item5 == boxes.item7)
        }
        if (matches.match1){
            return boxes.item3;
        } else if (matches.match2){
            return boxes.item6;
        } else if (matches.match3) {
            return boxes.item9;
        } else if (matches.match4){
            return boxes.item7;
        } else if (matches.match5) {
            return boxes.item8;
        } else if (matches.match6) {
            return boxes.item9;
        } else if (matches.match7) {
            return boxes.item9;
        } else if (matches.match8) {
            return boxes.item7;
        }   return -1;
    }

    // should remember state and clear this
    $('.restart').click(function(){
        console.clear();
        box.text('');
    });
});




// let board = [
//     [true, false, null],
//     [null, false, null],
//     [null, false, true]
// ]

// let board = [
//     [true, false, null],
//     [null, false, null],
//     [null, false, true]
// ]

// O X - 
// - X -
// - O O