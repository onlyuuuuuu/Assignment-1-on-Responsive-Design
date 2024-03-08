document.addEventListener('DOMContentLoaded', function() {
    var lineMenu = document.querySelector('.Line_menu');
    var sidebar = document.querySelector('.sidebar');

    if (lineMenu && sidebar) {
        lineMenu.addEventListener('click', function() {
            sidebar.classList.toggle('open');
        });
    }
});
