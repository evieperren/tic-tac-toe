const playerOne = $('.player-one');
const playerTwo = $('.player-two');

// check if DOM is ready 
$(document).ready(function(){
    // alert('document loaded');

    // highlight who is playing
    playerOne.click(function(){
        console.log('i was clicked!')
        playerOne.addClass('player-one--selected');
    })
    playerTwo.click(function () {
        console.log('i was clicked!')
        playerTwo.addClass('player-two--selected');
    })

    // change icon displayed dependant on what is selected
    if (playerOne.hasClass('player-one--selected')){
        console.log('player two is selected');

    } else if (playerTwo.hasClass('player-two--selected')){
        console.log('player two is selected');
    }
    
    // could be a for loop
    $('#2').click(function () {
        $('#2').html('X');
        // $('#2').click(function () {
        //     $('#2').html('')
        // });
    });
    $('#3').click(function () {
        $('#3').html('X');
        // $('#3').click(function () {
        //     $('#3').html('')
        // });
    });
    $('#4').click(function () {
        $('#4').html('X');
        // $('#4').click(function () {
        //     $('#4').html('')
        // });
    });
    $('#5').click(function () {
        $('#5').html('X');
        // $('#5').click(function () {
        //     $('#5').html('')
        // });
    });
    $('#6').click(function () {
        $('#6').html('X');
        // $('#6').click(function () {
        //     $('#6').html('')
        // });
    });
    $('#7').click(function () {
        $('#7').html('X');
        // $('#7').click(function () {
        //     $('#7').html('')
        // })
    });
    $('#8').click(function () {
        $('#8').html('X');
        // $('#8').click(function () {
        //     $('#8').html('')
        // })
    });
    $('#9').click(function () {
        $('#9').html('X');
        // $('#9').click(function () {
        //     $('#9').html('')
        // })
    });


    // restart the board 
    $('.restart').click(function(){
        $('.game__table--item').each(function(){
            $('.game__table--item').html('');
        })
    })

})
