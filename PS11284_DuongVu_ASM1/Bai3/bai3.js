var arrCheck = document.querySelectorAll('input[type="checkbox"]');
var arrSL = document.querySelectorAll('.quantity');
var arrGia = document.getElementsByName('gia');
var arrGiaSp = document.querySelectorAll('.giasp');
var arrLength = arrSL.length;

function start() {
    disable();
}

// Hàm disable ban đầu
function disable() {
    for (var i = 0; i < arrLength; i++) {
        arrSL[i].disabled = true;
    }
}

// Hàm thay đổi khi check
function check(i) {
    if (arrCheck[i].checked) {
        arrSL[i].disabled = false;
    } else {
        arrSL[i].disabled = true;
    }
    tongTien();
}

function tongTien() {
    var tien = 0;
    
    for (var i = 0; i < arrLength; i++) {
        if (arrCheck[i].checked) {
            var soLuong = parseInt(arrSL[i].value);
            console.log(soLuong);
            var gia = parseInt(arrGia[i].innerText);
            tien += soLuong * gia;
            arrGiaSp[i].innerHTML = soLuong * gia;
        } else {
            arrGiaSp[i].innerHTML = '';
        }
    }

    document.getElementById('tinhtong').innerText = tien;
}

start();