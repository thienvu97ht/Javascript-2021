// Khởi tạo biến đếm ảnh
var slideIndex = 0;

// Gọi hàm auto lần đầu
showSlides();

// Add event auto btn
var btnAuto = document.querySelector('#autoChange');
btnAuto.addEventListener('click', toggleInterval);

var intervalId;

function toggleInterval() {
    if (!intervalId) {
        intervalId = setInterval(function () {
            showSlides();
        }, 2000);
    } else {
        clearInterval(intervalId);
        intervalId = null;
    }
}

function plusSlides(n) {
    changeImg(slideIndex += n);
}

// Hàm chuyển ảnh
function changeImg(n) {
    var slidesElement = document.querySelectorAll('.mySlides');

    if (n > slidesElement.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slidesElement.length;
    }

    for (var i = 0; i < slidesElement.length; i++) {
        slidesElement[i].style.display = "none";
    }

    slidesElement[slideIndex - 1].style.display = "block";
}

// Hàm auto
function showSlides() {
    var slidesElement = document.querySelectorAll('.mySlides');
    for (var i = 0; i < slidesElement.length; i++) {
        slidesElement[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slidesElement.length) {
        slideIndex = 1
    }

    slidesElement[slideIndex - 1].style.display = "block";
}