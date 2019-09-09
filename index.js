$(function() {
    //adds item when user submits in text field
    $('#js-shopping-list-form').submit(function(event) {
      event.preventDefault();
      let addedItem = $('input').val();
      $('ul').append(`
      <li>
        <span class="shopping-item">${addedItem}</span>
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
    //code below checks items on list when user clicks check button
    $('ul').on('click', 'button.shopping-item-toggle', function(event) {
      $(this).closest('li').children('.shopping-item').toggleClass('shopping-item__checked');
    });
    //code below deletes item off list when user clicks delete button
    $('ul').on('click', 'button.shopping-item-delete', function(event) {
      $(this).closest('li').remove();
    });
  });
  