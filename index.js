
$(function() {
    $('form').submit(function(event){
        event.preventDefault();
        event.stopPropagation();
        $('ul').append(
            "<li>" +
            "<span class='shopping-item'>" +
             $(this).find('#shopping-list-entry').val() +
            "</span>" +
            "<div class='shopping-item-controls'>" +
            "<button class='shopping-item-toggle'>" +
            "<span class='button-label'>" +
            "check" +
            "</span>" +
            "</button>" +
            "<button class='shopping-item-delete'>" +
            "<span class='button-label'>" +
            "delete" +
            "</span>" +
            "</button>" +
            "</div>" +
            "</li>"
        )
        $(this).find('#shopping-list-entry').val("");
    })

    $('ul').on('click', '.shopping-item-delete', function(event) {
        this.closest('li').remove()
})
    $('ul').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').children('span').toggleClass("shopping-item__checked")

})

})
