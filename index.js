'use strict';

// $('#js-shopping-list-form').submit(e => {
//   e.preventDefault();
//   let item = $('#shopping-list-entry').val();
//   $('.shopping-list').append(`<li>
//   <span class="shopping-item">${item}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);
// })

// // ENTER invokes, but does not toggle --> removed 'keydown'?
// // is $(document) necessary? --> because not method within above function?
// // "e => {}" vs "function(e) {}" preference? latter enables $(this) vs $(e.target)
// $(document).on('click', '.shopping-item-toggle', e => {
//     if (e.which == 13 || e.which == 1) {
//       $(e.target).closest('div').siblings('.shopping-item').toggleClass('shopping-item__checked');
//     }
// })

// $(document).on('click', '.shopping-item-delete', e => {
//   if (e.which == 13 || e.which == 1) {
//     $(e.target).closest('li').remove();
//   }
// })

// ------------------------------------------------------------------------ //


// `STORE` is responsible for storing the underlying data
// that our app needs to keep track of in order to work.
//
// for a shopping list, our data model is pretty simple.
// we just have an array of shopping list items. each one
// is an object with a `name` and a `checked` property that
// indicates if it's checked off or not.
// we're pre-adding items to the shopping list so there's
// something to see when the page first loads.
const STORE = [
  {name: "apples", checked: false},
  {name: "oranges", checked: false},
  {name: "milk", checked: true},
  {name: "bread", checked: false}
];

function generateItemElement(item, itemIndex, template) {
  return `<li>${item.name}</li>`;
}


function generateShoppingItemsString(shoppingList) {
  console.log("Generating shopping list element");

  const items = shoppingList.map((item, index) => generateItemElement(item, index));
  
  return items.join("");
}


function renderShoppingList() {
  // render the shopping list in the DOM
  console.log('`renderShoppingList` ran');
  const shoppingListItemsString = generateShoppingItemsString(STORE);

  // insert that HTML into the DOM
  $('.js-shopping-list').html(shoppingListItemsString);
}


function handleNewItemSubmit() {
  // this function will be responsible for when users add a new shopping list item
  console.log('`handleNewItemSubmit` ran');
}


function handleItemCheckClicked() {
  // this function will be responsible for when users click the "check" button on
  // a shopping list item.
  console.log('`handleItemCheckClicked` ran');
}


function handleDeleteItemClicked() {
  // this function will be responsible for when users want to delete a shopping list
  // item
  console.log('`handleDeleteItemClicked` ran')
}

// this function will be our callback when the page loads. it's responsible for
// initially rendering the shopping list, and activating our individual functions
// that handle new item submission and user clicks on the "check" and "delete" buttons
// for individual shopping list items.
function handleShoppingList() {
  renderShoppingList();
  handleNewItemSubmit();
  handleItemCheckClicked();
  handleDeleteItemClicked();

}

// when the page loads, call `handleShoppingList`
$(handleShoppingList);