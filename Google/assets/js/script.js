document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('search-barra');

    searchBar.addEventListener('input', function () {
        if (searchBar.value.trim() === '') {
            searchBar.style.backgroundImage = "url('./assets/imgs/lupa.png')";
        } else {
            searchBar.style.backgroundImage = "url('./assets/imgs/lupa.png'), url('./assets/imgs/x.png')";
        }
    });

    searchBar.addEventListener('click', function (event) {
        if (searchBar.style.backgroundImage.includes('./assets/imgs/x.png') && event.offsetX > searchBar.offsetWidth - 175) {
            searchBar.value = '';
            searchBar.style.backgroundImage = "url('./assets/imgs/lupa.png')";
        }
    });
});