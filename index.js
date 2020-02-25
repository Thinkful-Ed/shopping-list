$(function (){
    //creating a function that adds items on submit
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

    //Raizy E 25feb2020 creating the same funtion for when the return button is pressed
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

})


