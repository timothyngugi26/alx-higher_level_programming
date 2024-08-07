$(document).ready(function() {
    // URL to fetch the translation of "hello"
    const url = 'https://hellosalut.stefanbohacek.dev/?lang=fr';
    $.get(url, function(data) {
        // Display the value of 'hello' in the <div id="hello">
        $('#hello').text(data.hello);
    }).fail(function() {
        $('#hello').text('Failed to load translation.');
    });
});

