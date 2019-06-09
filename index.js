$(function() {
    $('#js-shopping-list-form').submit(event => {
      // stop the default form submission behavior
      event.preventDefault();
    

      let newItem = $('#shopping-list-entry').val();
      // sets item to each shopping list entry
      // then each entry is appended to the shopping list section of the html

      console.log(newItem);
        $("#shopping-list-entry").val("")
        $(".shopping-list").append(
            `<li>
                <span class="shopping-item">${newItem} </span>

                <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                    </button>
                    <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                    </button>
                </div>
            </li>`);
        });
    })
    // add formatting to new item

$('.shopping-list').on('click', '.shopping-item-delete', function(event) {
      event.preventDefault();
     $(this).closest('li').remove();
});

// remove item when delete button is clicked
// strikethrough item when check button is clicked
$('.shopping-list').on('click', '.shopping-item-toggle', function(event){
    event.preventDefault();
    $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
});

  