const playerOne = $('.player-one');
const playerTwo = $('.player-two');


// check if DOM is ready 
$(document).ready(function(){
    // alert('document loaded');

    // highlight who is playing
    playerOne.click(function(){
        playerOne.addClass('player-one--selected');
        playerTwo.removeClass('player-two--selected');
    })
    playerTwo.click(function () {
        playerTwo.addClass('player-two--selected');
        playerOne.removeClass('player-one--selected');
        
    })

    // change icon displayed dependant on what is selected
    if (playerOne.hasClass('player-one--selected')){
        console.log('player two is selected');

    } else if (playerTwo.hasClass('player-two--selected')){
        console.log('player two is selected');
    }

    // allFields.each(function (field) {
    //     allFields.click( function () {
    //         console.log('clicked!');
    //         for(let i = 0; i < allFields.length; i++){
    //             let field =  allFields[i].value;
    //             console.log(field)
    //         }
    //     });
    // });
    const allFields = $('.game__table--item');
    allFields.each(function(i, item){
        for (i = 0; i < allFields.length; i++) {
            
            let field = allFields.eq[i];
            field = '';
            console.log(field);
            return field;
        }
    })


    // could be a for loop
    // $('#2').click(function () {
    //     $('#2').html('X');
    //     // $('#2').click(function () {
    //     //     $('#2').html('')
    //     // });
    // });

    // restart the board 
    $('.restart').click(function(){
        $('.game__table--item').each(function(){
            $('.game__table--item').html('');
        })
    })

})
