$(function() {
    // URL to fetch movie data
    const url = 'https://swapi-api.alx-tools.com/api/films/?format=json';
    
    // Make an AJAX request to fetch the movie data
    $.get(url, function(data) {
        // Clear the existing list (if any)
        $('#list_movies').empty();
        
        // Loop through each film in the data
        $.each(data.results, function(index, film) {
            // Create a new list item for each film title
            const listItem = $('<li></li>').text(film.title);
            // Append the list item to the <ul> element
            $('#list_movies').append(listItem);
        });
    }).fail(function() {
        // Handle errors if the request fails
        $('#list_movies').append('<li>Failed to load movie titles.</li>');
    });
});
