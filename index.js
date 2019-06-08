$(function(){
    //add item to list
    $('#js-shopping-list-form').submit(event =>{
        event.preventDefault();
        
        const userText = $(this).find('#shopping-list-entry');

        const list = $('.shopping-list');

        list.append('<li>'+
            '<span class="shopping-item">'+userText.val()+'</span><div class="shopping-item-controls">'+
            '<button class="shopping-item-toggle"><span class="button-label">check</span>'+
          '</button><button class="shopping-item-delete"><span class="button-label">delete</span>'+
          '</button></div></li>');

        userText.val('');
    });

    //Check item from list
    $('.shopping-item-toggle').on('click', event => {
        const listItem = $(event.currentTarget);
        //console.log(listItem.closest('span').text());
        (listItem.text() === 'uncheck') ? listItem.text('check'): listItem.text('uncheck');
        listItem.closest('div').siblings('span').toggleClass('shopping-item__checked');
    });

    //Delete items
    $('.shopping-item-delete').on('click', event => {

        const listItem = $(event.currentTarget);

        listItem.closest('li').remove();

    });
}); 