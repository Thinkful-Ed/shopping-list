$(document).ready(() => {
  const $list = [];
  $('li').hide(0);
  $(':submit').on('click', () => {
    event.preventDefault();
    const $item = $('#shopping-list-entry').val();
    if ($list.includes($item)) {
      alert('That item is already on your list!')
    } else if($item === '') {
      alert('Please enter a valid list item.')
    } else {
      $list.push($item)
      //The toggleClass needs to be fixed. Instead of adding the new items, it adds the new item plus the previous one. Not sure what is going on here, but I'll keep looking for a fix.
      $("li:first-child").clone().toggleClass($item).prependTo(".shopping-list").show();
    $(`.${$item}>.shopping-item`).text(`${$item}`);
    }
  });
  // really struggled here. DOM was deaf until I used document, and passed in .shopping-item-toggle. Problem resolved. Learned to add an alert to test if button fucntionality was working at all. Really helped resolve problem.
  $(document).on('click', '.shopping-item-toggle', () => {
    $(event.target).closest('div').siblings('.shopping-item').toggleClass('shopping-item__checked');
  })

  //I need to figure out how to reach back into the $item array and delete the item in this element. Currently I'm resetting the entire array. This blocks some functionality from earlier.
  $(document).on('click', '.shopping-item-delete', () => {
    $list.length = 0;
    $(event.target).closest('li').remove();
  })
  console.log($list);
});


