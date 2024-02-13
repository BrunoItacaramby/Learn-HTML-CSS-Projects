document.addEventListener('DOMContentLoaded', function () {
    var searchBar = document.getElementById('search-bar');
    var overlay = document.getElementById('overlay');
    var app_button = document.getElementById('img-apps')
    var app_window = document.getElementById('stepdown-window')


    // Exibir o overlay quando a barra de pesquisa ganhar foco
    searchBar.addEventListener('focus', function () {
        overlay.style.display = 'block';
        searchBar.style.boxShadow = 'none'
    });

    app_button.addEventListener('click', function () {
        app_window.style.display = 'block';
    });

    // Esconder o overlay quando a barra de pesquisa perder o foco
    // Note que isso pode precisar de ajustes se você quiser manter o overlay enquanto interage com a barra de pesquisa
    searchBar.addEventListener('blur', function () {
        overlay.style.display = 'none';
    });
});