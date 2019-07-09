//when check button is pressed line goes through item
//remove HTML element when delete is pressed
//add HTML element when add is pressed
//link to jQuery ($())
//link your JS to HTML/CSS page on github
//keyboard friendly (return/tab used when toggle button in place)
//add links to your JS in HTML code (at bottom)

$(function add() {
    $("js-shopping-list-form").click(function(event) {
        event.addItem();
        $(li).append(<li>
           <span class="shopping-item">$('shopping-List-Entry'.val(""))</span>
           <div class="shopping-item-controls">
             <button class="shopping-item-toggle">
               <span class="button-label">check</span>
             </button>
             <button class="shopping-item-delete">
               <span class="button-label">delete</span>
             </button>
           </div>);
   )
    }
    $(add);
}

$(function delete() {
   event.deleteItem();
    $("shopping-item-delete").click(function(event) {
        $(li).not("shopping-item"|$('shopping-List-Entry'.val(""))
        )
    }
   $(delete);
}

$(function check() {
    event.checkItem();
    $("shopping-item-toggle").click(function(event) {
        $(this).css("text-decoration", "line-through");

    }
    $(check)
}
