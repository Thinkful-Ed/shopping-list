
function addItem(){
    $('#js-shopping-list-form').submit( event => {
        event.preventDefault();

        var $shopItem = $(`<li><span class="shopping-item">${$("input:text").val()}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);
        $('.shopping-list').append($shopItem);

    });
};

function removeItem(){
    $('.shopping-list').on('click', 'button[class="shopping-item-delete"]', event => {
        $(this).parent().remove();
    });
};
        

/*function checkItem(){
    $('.shopping-item').click('.shopping-item-toggle', event => {
        var target = $(this).closest('.shopping-item');
        $(target).toggleClass('shopping-item__checked');
        console.log(target);
    })
}*/

addItem();
removeItem();
//checkItem();