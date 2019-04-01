$(function () {
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        var newEntry = $('input:text').val();
        $('ul').append( 
            '<li>' + '<span class="shopping-item">' + newEntry + 
            '</span><div class="shopping-item-controls">' +
            '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span>' + 
            '</button><button class="shopping-item-delete">' +
            '<span class="button-label">delete</span></button>' + '</li>' 
        );
        $('input:text').val('');
    });
});

$(function () {
    $('ul').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    }); 
});

$(function () {
    let span = $('.shopping-item');
    $('ul').on('click', '.shopping-item-toggle', function(event) {
        $(this).parent().siblings('.shopping-item').toggleClass('shopping-item__checked');
    });
});
