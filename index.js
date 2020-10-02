
function addItem(){
    $('#js-shopping-list-form').submit( event => {
        event.preventDefault();

        var $shopItem = $(`<li><span class="shopping-item">${$("input:text").val()}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);
        $('.shopping-list').append($shopItem);

    });
};


function removeItem(){
    $('ul').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });
};

        

function checkItem(){
    $('ul').on('click', '.shopping-item-toggle', function(event) {
        console.log('working');
        $(this).closest('li').children('.shopping-item').toggleClass('shopping-item__checked');
    });
};

addItem();
removeItem();
checkItem();