$(function() {
    $("button[type='submit']").on('click', function(event) {
      event.preventDefault();

      const newItem = $('.shopping-list-entry').val();
      $('shopping-list-entry').val('');

      $('.shopping-list').prepend( `     <li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
      );
    });

  $('.shopping-item-toggle').click(function {
    $(this).closest('li').find('shopping-item').toggleClass('shopping-item__checked');
  })
  $('.shopping-item-delete').click(function {
    $(this).closest('li').remove();
  })

})