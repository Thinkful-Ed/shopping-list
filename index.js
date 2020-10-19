$(function() {


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