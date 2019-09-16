const playerOne = $('.player-one');
const playerTwo = $('.player-two');
const box = $('.game__table--item');

// check if DOM is ready 
$(document).ready(function(){
    const allFields = $('.game__table--item');
    allFields.each(function (i) {
        for (i = 0; i < allFields.length; i++) {
            let field = allFields.eq[i];

            console.log(field);
            return field;
        }
    })

    playerOne.click(function(){
        playerOne.addClass('player-one--selected');
        playerTwo.removeClass('player-two--selected');
        field = 'x';

        box.click(function(){ 
           console.log(box[0]);
            box[0].replaceWith('x');
        })
    })
    playerTwo.click(function () {
        playerTwo.addClass('player-two--selected');
        playerOne.removeClass('player-one--selected');
        field = 'o';
    })


    

    $('.restart').click(function(){
        $('.game__table--item').each(function(){
            $('.game__table--item').html('');
        })
    })

})
