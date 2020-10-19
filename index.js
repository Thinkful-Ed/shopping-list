$(function() {


  // Check
  $('.shopping-item-toggle').on('click', function(e) {
    let listItem = $(e.target).parent().parent().siblings('.shopping-item');
    $(listItem).toggleClass('shopping-item__checked');
  });

  // Delete
});