$(function(){
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





});