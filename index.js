/* eslint-disable no-undef */
'use strict';

function addItem() {
  $('#js-shopping-list-form').submit( event => {
    event.preventDefault();
    const newItem = $(event.currentTarget).find('input[name="shopping-list-entry"]').val();
    const newItemHTML = 
      `<li>
        <span class="shopping-item">${newItem}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
      </li>`;
    $('.shopping-list').append(newItemHTML);
  });
}

function checkItem() {
  $('.shopping-list').on('click', '.shopping-item-toggle', function() {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
}

function removeItem() {
  $('.shopping-list').on('click', '.shopping-item-delete', function() {
    $(this).closest('li').remove();
  });
}

function main() {
  addItem();
  checkItem();
  removeItem();
}

$(main);