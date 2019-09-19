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

        if(findWinner().matches != -1 && findWinner().matches != ""){
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
            match1: (boxes.item1 == boxes.item2) && (boxes.item2 == boxes.item3),
            match2: (boxes.item4 == boxes.item5) && (boxes.item5 == boxes.item6),
            match3: (boxes.item7 == boxes.item8) && (boxes.item8 == boxes.item9),
            match4: (boxes.item1 == boxes.item4) && (boxes.item4 == boxes.item7),
            match5: (boxes.item2 == boxes.item5) && (boxes.item5 == boxes.item8),
            match6: (boxes.item3 == boxes.item6) && (boxes.item6 == boxes.item9),
            match7: (boxes.item1 == boxes.item5) && (boxes.item5 == boxes.item9),
            match8: (boxes.item3 == boxes.item5) && (boxes.item5 == boxes.item7)
        }
        // switch(matches){
        //     case matches.match1:
        //         return boxes.item3;
        //     case matches.match2:
        //         return boxes.item6;
        //     case matches.match3:
        //         return boxes.item9;
        //     case matches.match4:
        //         return boxes.item7;
        //     case matches.match5:
        //         return boxes.item8;  
        //     case matches.match6:
        //         return boxes.item9;
        //     case matches.match7:
        //         return boxes.item9;
        //     case matches.match8:
        //         return boxes.item7;
        // }
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

    $('.restart').click(function(){
        console.clear();
        box.text('');
    });
});