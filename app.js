
// add shopping list item functionality
$('#js-shopping-list-form').on('submit', function(e){
    console.log('you submitted add item')

    e.preventDefault();

    const newItem = $('#shopping-list-entry').val();

    $('.shopping-list').append(`<li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
            <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
            <span class="button-label">delete</span>
        </button>
        </div>
        </li>`)

    $('#shopping-list-entry').val('');
})

// add completed functionality as toggle
$('.shopping-list').on('click', '.shopping-item-toggle', function(e){
    // target nearest span with class shopping-item and .toggleClass('.shopping-item__checked')
    console.log('you clicked check')

    let theSpan = $(this).closest('li').children('.shopping-item');
    theSpan.toggleClass('shopping-item__checked');

})

// add delete functionality
$('.shopping-list').on('click', '.shopping-item-delete', function(e){
    console.log('you clicked delete')

    $(this.closest('li')).remove();
})