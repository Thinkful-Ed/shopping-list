$(function groceryList() {

    $("#js-shopping-list-form").submit(function handleSubmit(event) {
        //stops browser doing the default form action, i.e., submission:
        event.preventDefault();
//find the value of anything typed into `input` and store in variable 'item':   
        const item = $(this).find('input[name="shopping-list-entry"]').val();
//add item to the end of <ul> shopping list as new <li>:
        $('.shopping-list').append(`<li>${item}</li>`).after(
            `<span>${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>`);
//format item to match other li elements:
        // <span class="shopping-item">bread</span>
        // <div class="shopping-item-controls">
        //   <button class="shopping-item-toggle">
        //     <span class="button-label">check</span>
        //   </button>
        //   <button class="shopping-item-delete">
        //     <span class="button-label">delete</span>
        //   </button>
        // </div>
        $(item).add('#shopping-list-item').addClass("shopping-item", "shopping-list", "shopping-item-controls", "shopping-item-toggle", "button-label" );
        // $(item).html("<div><button class="shopping-item-toggle"><span class="button-label">check</span></button></div>");
        $(item).html("<div><button class=\"shopping-item-toggle\">/button></div>")

        

    });

    

} );



$(groceryList);