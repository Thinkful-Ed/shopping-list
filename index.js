$(function groceryList() {

    $("#js-shopping-list-form").submit(function handleSubmit(event) {
        //stops browser doing the default form action, i.e., submission:
        event.preventDefault();
//find the value of anything typed into `input` and store in variable 'item':   
        const item = $(this).find('input[name="shopping-list-entry"]').val();
        $(item).addClass("shopping-list", "shopping-item");
//add item to the end of <ul> shopping list as new <li> along with matching html elements (possible to achieve with `clone` or `after` method as well?):
        $('.shopping-list').append(
    `<li>
        <span class="shopping-item">${item}</span>
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
//listen for the "check" button and toggle class for nearest "li" element if clicked:
    $(".shopping-list").on('click', '.shopping-item-toggle', function(event) {
        // event.stopPropagation();//stop bubbling up the DOM and only affect li clicked
        $(this).closest("li").find('.shopping-item').toggleClass("shopping-item__checked");
        
    });

//listen for the "delete" button and remove nearest "li" element if clicked:
        $(".shopping-list").on('click', ".shopping-item-delete", function(event) { 
            event.stopPropagation();//stop bubbling up the DOM and only affect li clicked         
            $(this).closest("li").remove();
        });



    });


 




$(groceryList);