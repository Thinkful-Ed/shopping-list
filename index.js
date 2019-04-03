function createListHtml(value){
	return `<li><span class="shopping-item">${value}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`
}

function createShoppingList() {
	$('#js-shopping-list-form').on('submit', function(event){
		event.preventDefault();
		const value = $('#shopping-list-entry').val();
		console.log(value);

		$('.shopping-list').append($(createListHtml(value)));
		$('#shopping-list-entry').val('');
	});
};
$(createShoppingList)

$('li').on('click', '.shopping-item-delete', function(event) {
     $(event.target).closest('li').remove();
  });

$('li').on('click', '.shopping-item-toggle', function(event){
  	event.preventDefault();
		$(event.target).closest('li').toggleClass('shopping-item__checked');
	});