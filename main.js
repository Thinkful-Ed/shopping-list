

$(function() {
    // mechanism for adding new items to the shopping cart
    $('#js-shopping-list-form').submit( event => {
      // stop the default form submission behavior
      event.preventDefault();
  
      const item = $("#shopping-list-entry").val();
      // we'll store individual DOM elements 
  
      const newHtml = `<li><span class="shopping-item">` +item+ `</span><div class="shopping-item-controls"> <button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`;
         
      $(".shopping-list").append(newHtml);   
      });
      
      //here is how we can "check" and uncheck shopping cart items 
      $(".shopping-item-toggle").on('click', function(event) {
        $(event.currentTarget).closest("li").toggleClass("shopping-item__checked");
      });
  
      // and finally, this is how to permanently delete an item
      $(".shopping-item-delete").on('click', function(event) {
        $(event.currentTarget).closest("li").remove("li");
      });
  
      })
  