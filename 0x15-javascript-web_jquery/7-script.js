$.get('https://swapi-api.alx-tools.com/api/people/5/?format=json', function(data) {
    $('#character').text(data.name);
}).fail(function() {
    $('#character').text('Failed to load character name.');
});

