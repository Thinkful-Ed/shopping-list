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
// $().toggle(function(e){

// });
// Function to handle the deletion of an item
// $().on('click', function(e){

// });