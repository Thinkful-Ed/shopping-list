// Function to handle the creation of new items
$('#js-shopping-list-form').submit(function(e){
    // Prevent the default behavior of a form submitting
    e.preventDefault();
    // Initialize a variable to point to our entry field
    const entryField = $(this).children('#shopping-list-entry');
    // Initialize a variable and set it equal to our input field value
    const addItem = entryField.val();
    // Prepend the html element with our item to the list
    $('.shopping-list').prepend(`
        <li>
            <span class="shopping-item">` + addItem + `</span>
            <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
                <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
                <span class="button-label">delete</span>
            </button>
            </div>
        </li>
    `);
    // Clear the entry field
    entryField.val('');
});

// Function to handle the completion of an item
$('.shopping-list').on('click', '.shopping-item-toggle', function(e){
    // Initialize a varabile to store the item and it's encompassing DOM elements we wish to mark as checked
    const checkItem = $(this).closest('li');
    // Toggle the 'checked' class on the appropriate element
    checkItem.children('span.shopping-item').toggleClass('shopping-item__checked');
});

// Function to handle the deletion of an item
$('.shopping-list').on('click', '.shopping-item-delete', function(e){
    // Initialize a variable to store the item and it's encompassing DOM elements we wish to delete
    const deleteItem = $(this).closest('li');
    // Remove the parent li and it's content from the DOM
    deleteItem.remove();
});