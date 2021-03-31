// Khởi tạo biến đếm ảnh
var slideIndex = 0;

// Gọi hàm show ảnh
showSlides(); 

var btnEnd = document.querySelector('.end');
var btnStart = document.querySelector('.start');

// Add event
btnEnd.addEventListener('click', endImage );
btnStart.addEventListener('click',startImage );

function plusSlides(n) {
    changeImg(slideIndex += n);
}

// Hàm chuyển ảnh về cuối
function endImage() {
    var slidesElement = document.querySelectorAll('.mySlides');
    for (var i = 0; i < slidesElement.length; i++) {
        slidesElement[i].style.display = "none";
    }
    slidesElement[7].style.display = "block";
}

// Hàm chuyển ảnh về đầu
function startImage() {
    var slidesElement = document.querySelectorAll('.mySlides');
    for (var i = 0; i < slidesElement.length; i++) {
        slidesElement[i].style.display = "none";
    }
    slidesElement[0].style.display = "block";
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