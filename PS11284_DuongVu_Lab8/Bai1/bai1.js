var messageErr = document.querySelector('.form-message.text-center');
var overlay = document.querySelector('.overlay');
var redirectForm = document.querySelector('#form-2')

var btnRedirect = document.querySelector('.btn-redirect');
var btnCancel = document.querySelector('.btn-cancel');
var timeCountdownm = document.querySelector('.countdownm');

function start() {
    disable();
}


// Hàm disable
function disable() {
    overlay.style.display = 'none';
    redirectForm.style.display = 'none';
}

// Hàm show form
function showForm() {
    countdown();
    if (overlay.style.display == 'none' || redirectForm.style.display == 'none') {
        overlay.style.display = 'block';
        redirectForm.style.display = 'block';
    }
}

// Hàm ẩn form
function hideForm() {
    if (overlay.style.display == 'block' || redirectForm.style.display == 'block') {
        overlay.style.display = 'none';
        redirectForm.style.display = 'none';
    }
    clearTimeout(myVar);
};

// Hàm Countdownm
function countdown() {
    var i = 5;

    function time() {
        timeCountdownm.innerHTML = i;
        if (i == 0) {
            clearInterval(count);
        }
        i--;
    }
    count = setInterval(time, 1000)
}

var myVar;

// Hàm redirect
function autoRedirect() {
    myVar = setTimeout(function () {
        window.location.href = "https://longnv.name.vn"
    }, 6000)
}

start();