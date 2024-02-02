document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('search-barra');

    searchBar.addEventListener('input', function () {
        if (searchBar.value.trim() === '') {
            searchBar.style.backgroundImage = "url('./imgs/lupa.png')";
        } else {
            searchBar.style.backgroundImage = "url('./imgs/lupa.png'), url('./imgs/x.png')";
        }
    });

    searchBar.addEventListener('click', function (event) {
        if (searchBar.style.backgroundImage.includes('./imgs/x.png') && event.offsetX > searchBar.offsetWidth - 175) {
            searchBar.value = '';
            searchBar.style.backgroundImage = "url('./imgs/lupa.png')";
        }
    });
});