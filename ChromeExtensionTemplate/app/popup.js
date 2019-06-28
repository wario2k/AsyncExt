'use strict';

// Run popup initialization as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
    popup.init();
});

var popup = {
    init: function () {
        console.log('Popup loaded!');
    },
};

$(document).ready(() => {
    const loginBtn = $('#ups-login-btn');
    const loginForm = $('#ups-login-form');

    console.log('Document loaded!');
    loginBtn.click((e) => {
        console.log('Login btn clicked');
        e.preventDefault();

        // Hide login on submit
        loginForm.slideUp();
        
    });
});
