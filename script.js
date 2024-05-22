document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('searchInput');
    const searchOptions = document.getElementById('searchOptions');

    searchInput.addEventListener('click', function() {
        searchOptions.style.display = 'block';
    });

    document.addEventListener('click', function(event) {
        const isClickInside = searchInput.contains(event.target);
        const isClickInsideOptions = searchOptions.contains(event.target);

        if (!isClickInside && !isClickInsideOptions) {
            searchOptions.style.display = 'none';
        }
    });
});
