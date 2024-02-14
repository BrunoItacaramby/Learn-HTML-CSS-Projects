document.addEventListener('DOMContentLoaded', function () {
    var searchBar = document.getElementById('search-bar');
    var overlay = document.getElementById('overlay');
    var app_button = document.getElementById('img-apps')
    var app_window = document.getElementById('stepdown-window')
    var searchBar = document.getElementById('search-bar');
    var x_button = document.getElementById('img-x')



    searchBar.addEventListener('focus', function () {
        overlay.style.display = 'block';
        searchBar.style.boxShadow = 'none'
    });

    searchBar.addEventListener('blur', function () {
        overlay.style.display = 'none';
    });

    app_button.addEventListener('click', function (event) {
        if(app_window.style.display === 'block') {
            app_window.style.display = 'none';
        }else {
            app_window.style.display = 'block';
        } 
        event.stopPropagation();       
    });

    


document.addEventListener('click', function (event) {
    var isClickInsideAppWindow = app_window.contains(event.target);

    if (!isClickInsideAppWindow && app_window.style.display === 'block') {
        app_window.style.display = 'none';
    }
});

searchBar.addEventListener('input', function () {
    if (searchBar.value) {
        x_button.style.display = 'block';
    }
});

x_button.addEventListener('click', function () {   
       
        searchBar.focus()
        searchBar.value = '';
        x_button.style.display = 'none'

});

document.getElementById('img-x').addEventListener('mouseenter', function() {
    this.src = './img/x-hover.png';
});

document.getElementById('img-x').addEventListener('mouseleave', function() {
    this.src = './img/x.png';
});
});