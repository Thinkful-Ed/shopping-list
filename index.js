$(document).ready(() => {
  
  $('li').hide();
  const list = [];
  const date = new Date();
  const $addedToList = $(`<span> Added to list: ${date}</span>`).css({'font-size': '80%', 'margin': '15px'});
  
  $('form :submit').on('click', () => {
    
    event.preventDefault();
    const $item = $('#shopping-list-entry').val();
    
    if (list.includes($item)) {
      alert('That item is already on your list!')
    } else if($item === '') {
      alert('Please enter a valid list item.')
    } else {
      list.push($item);
      $("li")
        .eq(0)
        .clone()
        .removeClass()
        .addClass($item)
        .prependTo(".shopping-list")
        .show();
      $(`.${$item}>.shopping-item`)
        .text(`${$item}`)
        .css({'font-weight': 'bold'})
        .data($item)
    }
  });

  $(document).on('click', '.shopping-item-toggle', () => {
    $(event.target).closest('div').siblings('.shopping-item').toggleClass('shopping-item__checked');
  })

  $(document).on('click', '.shopping-item-delete', () => {
    $(event.target).closest('li').remove();
  })
  console.log(list);
});


