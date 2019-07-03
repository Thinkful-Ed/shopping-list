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
    //The toggleClass needs to be fixed. Instead of adding the new items, it adds the new item plus the previous one. Not sure what is going on here, but I'll keep look for a fix.
    $("li:first-child").clone().toggleClass($item).prependTo(".shopping-list").show();
  $(`.${$item}>.shopping-item`).text($item);
  }
  
  
  console.log($list);
});
});

