//FORM:
//Create code that stops form from being submitted. Also
//should code so that it adds a child list to the li items
$("form").submit(function(event) {
    event.preventDefault();
    var itemValue = $("#shopping-list-entry").val();
    console.log(itemValue);
    if (itemValue.length === 0) {
        alert('Cannot be blank!')
    } else {
        let newRow = $(`
        <li>
            <span class="shopping-item">${itemValue}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
            </div>
        </li>`);
    $(".shopping-list").append(newRow)
    }
    //add new list item to ul, add shopping item text to span,
    //add buttons - delete and check - and add labels to buttons
});


//SHOPPING-ITEM-TOGGLE:
//create functionality that, when pressed, crosses or
//uncrosses the selected item from the list

// $(".shopping-item-toggle").click(function(event) {
$(document).on("click", ".shopping-item-toggle", function(event) {
    event.preventDefault();
    console.log($(this));
    $(this).parent().parent().find(".shopping-item").toggleClass("shopping-item__checked");
    //$(this).addClass(".shopping-item__checked");
})

//SHOPPING-ITEM-DELETE:
//create functionality that deletes this

$(document).on("click", ".shopping-item-delete", function(event) {
    event.preventDefault();
    $(this).parent().parent().remove();
})
