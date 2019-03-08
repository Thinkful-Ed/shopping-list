/*ADD ITEMS TO LIST
Remember to append elements with input value */
$('#js-shopping-list-form button').click(function(event){
    //prevent pg from disappearing
    event.preventDefault();

    const inputItem = $('#shopping-list-entry').val();
    //alert(inputItem);


    //add inputItem to list with proper div and buttons etc
    //reminder** space between span buttons of check and delete provides a space on webpg
    $('.shopping-list').append(`<li><span class="shopping-item">${inputItem}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button> <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);
});

/* ******CODE CHECK(TOGGLE) FUNCTION****
Keep in mind event delegation when coding the check and delete button functions. 
-want to use .onClick vs .click because .on works well with dynamically added items(items that did not come in with the original code [what the above code does]).  .click doesn't work with newly added items unless you bind it to them(I don't know bind yet..)
.on( events [, selector ] [, data ], handler )
-click is the event
-selector is what it will be working on(?) the descendants
-data-? I am unsure for now
-handler is the function to be carried out

****
I had issues getting the particular check button to crossout the added item. added knowledge..

1.) .closest() **begins** with the current element**aka it begins with itself**- and travels up the DOM until finds match for the supplied selector
    e.g $( "li.item-a" ).closest( "ul" ).css( "background-color", "red" ); 
        -this starts looking at 'li.item-a' and goes up to find the 'ul' closest to it. gives it a red background
        -if .closest('li') then it will highlight itself.
2.) event.target vs event.currentTarget
    a.) e.target the one that triggered(aka received) the event-the one clicked on
    b.)e.currentTarget: the object listening for the event
*/

$('.shopping-list').on('click','.shopping-item-toggle', event=>{
   //alert('check clicked!');//let's me know if the button has been clicked
    $(event.target).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');//Woohoo!
});

/* ******CODE CHECK(TOGGLE) AND DELETE BUTTON FUNCTIONS***** */

$('.shopping-list').on('click','.shopping-item-delete', event=>{
    //alert('delete clicked!');
    $(event.target).closest('li').remove();
 });