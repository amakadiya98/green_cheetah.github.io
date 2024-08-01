document.addEventListener('DOMContentLoaded', function() {
    var navbarCollapse = document.getElementById('navbarSupportedContent');
    var headerSmBtn = document.querySelector('.header-sm-btn');

    navbarCollapse.addEventListener('show.bs.collapse', function () {
        headerSmBtn.classList.add('d-none');
    });

    navbarCollapse.addEventListener('hide.bs.collapse', function () {
        headerSmBtn.classList.remove('d-none');
    });
});