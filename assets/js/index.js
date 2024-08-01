document.addEventListener('DOMContentLoaded', function () {
    var navbarCollapse = document.getElementById('navbarSupportedContent');
    var headerSmBtn = document.querySelector('.header-sm-btn');

    navbarCollapse.addEventListener('show.bs.collapse', function () {
        headerSmBtn.classList.add('d-none');
    });

    navbarCollapse.addEventListener('hide.bs.collapse', function () {
        headerSmBtn.classList.remove('d-none');
    });
});

// form

document.addEventListener('DOMContentLoaded', function () {
    const togglePassword = document.getElementById('togglePassword');
    const password = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');

    togglePassword.addEventListener('click', function () {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);

        if (type === 'password') {
            eyeIcon.src = './assets/images/close-eye.svg';
        } else {
            eyeIcon.src = './assets/images/eye-icon.svg';
        }
    });
    
});

document.addEventListener('DOMContentLoaded', (event) => {
    const loginButtons = document.querySelectorAll('.login-button-click');

    loginButtons.forEach(button => {
        button.onclick = function() {
            window.location.href = 'loginform.html';
        };
    });
});




