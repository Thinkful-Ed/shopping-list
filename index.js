// let itemCheck = function(){
//         $('.shopping-item-toggle').on('click', function(event){
//             if(!$(this).parents().siblings().hasClass("shopping-item__checked")){
//                 $(this).parents().siblings('.shopping-item').addClass("shopping-item__checked");
//             }else{
//                 $(this).parents().siblings('.shopping-item').removeClass("shopping-item__checked");
//             };
//             //console.log($(this).parents().siblings('.shopping-item'));
//         });
// };
// $('.shopping-list').on('click', '.shopping-item-toggle', function(e){
//       $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')});



let itemCheck = function(){
    $('.shopping-list').on('click', '.shopping-item-toggle', function(e){
          $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')});
    // $('.shopping-item-toggle').on('click', function(event){
    //     $(this).closest('li').find('.shopping-item').toggleClass("shopping-item__checked");
    //     // console.log($(this).parent().siblings(".shopping-item"));
    // });
    // // console.log($(this).parent().siblings(".shopping-item"));
}

let itemRemove = function(){
    $('.shopping-item-delete').on('click', function(event){
        $(this).parent().parent().remove();
    });
};
let itemAdd = function(){
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    const itemNew =  $(this).find(
  'input[name="shopping-list-entry"]').val();
    $(".shopping-list").append(
        $('<li>').append(
             $('<span>').attr('class','shopping-item').append(itemNew),
             $('<div>').attr('class','shopping-item-controls').append(
                 $('<button>').attr('class','shopping-item-toggle').append(
                 $('<span>').attr('class', 'button-label').append('check')),
                 $('<button>').attr('class', 'shopping-item-delete').append(
                 $('<span>').attr('class','button-label').append('delete'))
    )));
    $(itemRemove);
    $(itemCheck);
  });
};

$(itemAdd);
$(itemRemove);
$(itemCheck);
