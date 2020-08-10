$('#js-shopping-list-form').submit(e => {
  e.preventDefault();
  let item = $('#shopping-list-entry').val();
  $('.shopping-list').append(`<li>
  <span class="shopping-item">${item}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);
})

// ENTER invokes, but does not toggle
// is $(document) necessary?
$(document).on('click keydown', '.shopping-item-toggle', e => {
    if (e.which == 13 || e.which == 1) {
      $(e.target).closest('div').siblings('.shopping-item').toggleClass('shopping-item__checked');
    }
})

$(document).on('click keydown', '.shopping-item-delete', e => {
  if (e.which == 13 || e.which == 1) {
    $(e.target).closest('li').remove();
  }
})

