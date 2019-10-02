
function clickSubmit() {
        let submitButton = $('button').first();
        submitButton.on('click', function(event) {
            event.preventDefault();
            console.log('clicked!');
        });
    }

    $(clickSubmit);
