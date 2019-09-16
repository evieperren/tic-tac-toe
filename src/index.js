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
            for (let i = 0; i < box.length; i++){
                let boxItem = box[i];
                console.log(boxItem);
                box[i].replaceWith(field);
            }
        })
    })
    playerTwo.click(function () {
        playerTwo.addClass('player-two--selected');
        playerOne.removeClass('player-one--selected');
        field = 'o';

        box.click(function () {
            for (let i = 0; i < box.length; i++) {
                let boxItem = box[i];
                console.log(boxItem);
                box[0].replaceWith(field);
            }
        })
    })

    $('.restart').click(function(){
        box.each(function(){
            field = '';
        })
    })

})
