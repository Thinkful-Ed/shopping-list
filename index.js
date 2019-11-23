function listClick() {
    // Check/uncheck item when check button is clicked -> use event delegation
    $('.shopping-list').on('click', '.shopping-item-toggle', function (event) {
        let item = $(this).closest('li').find('.shopping-item');        
        $(item).toggleClass('shopping-item__checked');        
    });

    // Delete item when delete button is clicked -> use event delegation
    $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
        let item = $(this).closest('li');
        $(item).remove();
    });

    // Add item to list when input value is not empty
    $('#js-shopping-list-form').children('button').on('click', function (event) {
        // Stop form from submitting
        event.preventDefault();

        // Grab shopping list elements
        let item = $(this).siblings('#shopping-list-entry');
        let shoppingList = $(this).closest('.container').find('.shopping-list');

        // Add item if input value is not empty
        if ($(item).val()) {
            $(shoppingList).append(`
            <li>
                <span class="shopping-item">${$(item).val()}</span>
                <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
                </div>
            </li>`);
        }
    });
}

$(listClick);