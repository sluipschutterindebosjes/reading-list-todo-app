document.addEventListener('DOMContentLoaded', () => {
    const bookSearch = document.getElementById('book-search');
    const bookList = document.getElementById('book-list');

    bookSearch.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            searchBooks(event.target.value);
        }
    });

    function searchBooks(query) {
        // TODO: Fetch books from Google Books API and add them to the book list
    }
});
