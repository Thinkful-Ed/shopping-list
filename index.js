function listClick() {
    $('.shopping-item-toggle').on('click', function (event) {
        console.log('clicked check button');
        let item = $(this).closest('li').find('.shopping-item');
        console.log(item);
        $(item).toggleClass('shopping-item__checked');
        //console.log($(this).closest('li').find('.shopping-item').css('text-decoration'));
    });

    $('.shopping-item-delete').on('click', function (event) {
        console.log('clicked delete button');
    });
}

$(listClick);