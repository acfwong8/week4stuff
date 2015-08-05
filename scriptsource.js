console.log('working')

$(document).ready(function() {
    //1. Get the user input when they submit the form
    $('form').on('submit',function(evnt){
        evnt.preventDefault();
        var userInput = $('.form-control').val();

        $('.form-control').val('');

        var task = $('<li>').html('<span class="glyphicon glyphicon-unchecked"></span>' + userInput);
        console.log(task);

        $('ul').append(task);
    });
    //2. Create a new li element with the user's input
    //3. Add newly created li to the ul on the page

    $('ul').on('click','li',function(){
        console.log("hello");
        $(this).toggleClass('done');
        $(this).find('span').toggleClass("glyphicon-unchecked glyphicon-checked");
        // $(this).css({
        //     "text-decoration":"line-through"
        // });
    });
    
});
