var state = {
    items:[]
};

$('document').ready(function(){
    $('li').each(function(){
        addItem(state,$(this).html())
    });

    addItem(state,'<span class="">banan</span>');

    renderList(state, $('.shopping-list'));

    $('.shopping-item-toggle').click(function() {

        var button = $(this);
        checkOff(button.parent().parent());


    });
});

function addItem(state, item) {
    // console.log('adding',item)
    state.items.push(item);
};

function renderList(state, element) {
    var itemsHTML = state.items.map(function(item) {
        return '<li>' + item + '</li>';
    });
    element.html(itemsHTML);
};

function checkOff(element) {
    //<li>
    //     <span class="shopping-item shopping-item__checked">milk</span>
    //     <div class="shopping-item-controls">
    //       <button onClick="checkoff()" class="shopping-item-toggle">
    //         <span class="button-label">check</span>
    //       </button>
    //       <button class="shopping-item-delete">
    //         <span class="button-label">delete</span>
    //       </button>
    //     </div>
    //</li>

    console.log(element);
    element.find(".shopping-item").addClass("shopping-item__checked");
};

