
function addItems(){
    $('#js-shopping-list-form').submit( event => {
        event.preventDefault();

        var $shopItem = $(`<li><span class="shopping-item">${$("input:text").val()}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);
        $('.shopping-list').append($shopItem);

    });
};

addItems();