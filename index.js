$(function() {
  // Add List Item
  $('#js-shopping-list-form').on('submit', function(e) {
    e.preventDefault();
    let newListItem = $('#shopping-list-entry').val();
    $('.shopping-list').append(`<li>
    <span class="shopping-item">${newListItem}</span>
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

  // Check
  $('.shopping-item-toggle').on('click', function(e) {
    let listText = $(e.target).parent().parent().siblings('.shopping-item');
    listText.toggleClass('shopping-item__checked');
  });

  // Delete
  $('.shopping-item-delete').on('click', function(e) {
    let parentLi = $(e.target).parent().parent().parent();
    parentLi.remove();
  });
});