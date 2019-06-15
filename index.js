$(function() {
  
    /*check button*/
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
      $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

    /*delete button*/
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
      $(this).closest('li').remove();
    });

    /*add item*/
    $('#js-shopping-list-form').on('submit', function(e) {
        e.preventDefault();
        let text = $('input:text').val();
        console.log("text = " + text);
        $('ul.shopping-list').append(`<li>
        <span class="shopping-item">${text}</span>
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

});
