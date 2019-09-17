const playerOne = $('.player-one');
const playerTwo = $('.player-two');
const box = $('.game__table--item');

// check if DOM is ready 
$(document).ready(function(){

    playerOne.click(function(){
        playerOne.addClass('player-one--selected');
        playerTwo.removeClass('player-two--selected');
        
        box.click(function(){ 
            console.log(this);
            box.html = 'x';
            // for (let i = 0; i < box.length; i++){
            //     let boxItem = box.eq[i];
            //     box[i].replaceWith(boxItem);
            // }
        })
    });

// only returns first item? 
    for (let i = 0; i < box.length; i++) {
        let boxItem = box[i];
        // console.log(boxItem);
        return boxItem;
    };
    
// no longer is registered?
    playerTwo.click(function () {
        playerTwo.addClass('player-two--selected');
        playerOne.removeClass('player-one--selected');
    })

    $('.restart').click(function(){
        box.each(function(){
            field = '';
        })
    })

})
