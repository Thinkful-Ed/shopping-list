$(document).ready(() => {
  
  $('li').hide();
  const list = [];
  
  $('form').submit(() => {
    
    event.preventDefault();
    const $item = $('#shopping-list-entry').val();
    
    if (list.includes($item)) {
      alert('That item is already on your list!')
    } else if($item == '' || $item == null) {
      alert('Please enter a valid list item.')
    } else {
      list.push($item);
      $("li")
        .eq(0)
        .clone()
        .attr('id', `${$item}`)
        .prependTo(".shopping-list")
        .show();
      $(`#${$item}>.shopping-item`)
        .text(`${$item}`)
    }
  });

  $('ul').on('click', '.shopping-item-toggle', () => {
    $(event.target)
      .closest('div')
      .siblings('.shopping-item')
      .toggleClass('shopping-item__checked');
  })

  $('ul').on('click', '.shopping-item-delete', () => {
    let itemIndex = list.findIndex(item => item === $('li').attr('id'));
    list.splice(itemIndex, 1);
    $(event.target)
      .closest('li')
      .remove();
  })

  console.log(list);
});


