$(function() {
    $('#js-shopping-list-form').submit( event => {
        // stop the default form submission behavior
        event.preventDefault();
        // create variable to store entered shopping value
        const itemToAdd = $(this).find(
        'input[name="shopping-list-entry"]').val();
        console.log(itemToAdd);
        //add li to ul with value of added item
        $(".shopping-list").append(`<li><span class="shopping-item">${itemToAdd}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);    
    });   
  });

$(function() {
    //create on click function for check button
    //that crosses out the item checked with a strikethrough
    //by toggling class for shopping-item-toggle
    $('ul').on('click', '.shopping-item-toggle', function(event) {
        event.stopPropagation();
        $(this).closest('li').children('span').eq(0).toggleClass('shopping-item__checked');
    });
});

$(function() {
    //create on click function for delete button
    //that targets parent li and removes the item from the list
    $('ul').on('click', '.shopping-item-delete', function(event) {
        event.stopPropagation();
        $(this).closest('li').remove();
    });
});