function toggleSearchBar() {
    const searchBar = document.getElementById('searchBar');
    searchBar.style.display = searchBar.style.display === 'block' ? 'none' : 'block';
    if (searchBar.style.display === 'block') {
      searchBar.focus();
    }
  }
  