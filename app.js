$(document).ready(function() {

  // logic for adding an item to shopping list
  $("#js-shopping-list-form").submit(function(event) {
    // stops default browser behavior for form submission,
    // since we don't actually want to submit to server
    event.preventDefault();

    // add new item to botom of list
    $('.shopping-list').append(
      '<li>' +
        '<span class="shopping-item">' + $("#shopping-list-entry").val() + '</span>' +
        '<div class="shopping-item-controls">' +
          '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span>' +
          '</button>' +
          '<button class="shopping-item-delete">' +
            '<span class="button-label">delete</span>' +
          '</button>' +
        '</div>' +
      '</li>'
    );
    // remove the submitted item from the form input
    $(this)[0].reset();
  });

  // logic for deleting items from list
  $(".shopping-list").on("click", ".shopping-item-delete", function(event){
    // here `this` refers to the `.shopping-item-delete` element that was clicked.
    // we travel up the document tree to get the nearest parent element
    // that"s an `li`
    $(this).closest("li").remove();
  });

  // logic for checking/unchecking items
  $(".shopping-list").on("click", ".shopping-item-toggle", function(event){

    // toggle the .shopping-item__checked class
    $(this).closest("li").find(".shopping-item").toggleClass(
      "shopping-item__checked");
  });

})