$(function (){
    //creating a function that adds items on click
    $('form button').click(function (event){

        event.preventDefault();
        //creating a variable for the input
        const groceryItem= $('input').val();
    
   // console.log(jhlkjhlkjh);
   // adding a 'li' item of groceryItems to the list
        $('ul').append(
            `<li><span class="shopping-item">${groceryItem}</span>
            <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
            <span class="button-label">check</span></button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
        </div></li>`
        )

    });

    //Raizy E 25feb2020 creating the same funtion for when the return button is pressed on the button
    $('form button').keydown(function (event){
        if(event.which===13){
            event.preventDefault();
        //creating a variable for the input
        const groceryItem= $('input').val();
    
   // adding a 'li' item of groceryItems to the list
        $('ul').append(
            `<li><span class="shopping-item">${groceryItem}</span>
            <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
            <span class="button-label">check</span></button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
        </div></li>`
        )
        }
    });

    //creating the same function for when enter is pressed in the input
    $('#shopping-list-entry').keydown(function (event){
        if(event.which===13){
            event.preventDefault();
        //creating a variable for the input
        const groceryItem= $('input').val();
    
   // adding a 'li' item of groceryItems to the list
        $('ul').append(
            `<li><span class="shopping-item">${groceryItem}</span>
            <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
            <span class="button-label">check</span></button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
        </div></li>`
        )
        }
    });

  
  //Raizy E 25feb2020 creating a function to toggle the checked button
    $('ul').on('click', '.shopping-item-toggle', function(){
        //identify the span in the list and toggle the strikethrough class on the span
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
    });
    

  //Raizy Einhorn 26Feb2020 
    //creating Jquery function to delete <li> items when the delete button is clicked
    $('ul').on('click', '.shopping-item-delete', function(){
        //find the <li> element and remove it
        $(this).closest('li').remove();
    });

})


