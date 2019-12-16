    $(function(){

  // listen for form submission
  $('#js-shopping-list-form').submit(function(event) {

    // stop default form submission
    event.preventDefault();

    // get text value for the new item
    const listItem = $('.js-shopping-list-entry').val();


    // clear text input so user can input a new one
    $('.js-shopping-list-entry').val('');

    // add new shopping list item as a `li`
    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">${listItem}</span>
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

  // listen for click events on delete buttons for shopping list
  // put the event listener on parent element

  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {

    // this will look for the closest parent `li` element and remove it.
    // in other words, it will remove shopping list item.
    $(this).closest('li').remove();
  });


  // when a user clicks the "check" button, this will cause the checked off styling
  // to toggle
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {

    // go up to parent li, then find the child`.shopping-item`  and
    // toggle `.shopping-item__checked` class.
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

});
