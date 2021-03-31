// Khởi chạy ứng dụng
function start() {
    setInterval('showTime()', 1000);
}

// Hiển thị thời gian
function showTime() {
    var now = new Date();
    var date = now.getDate();
    var month = now.getMonth();
    var year = now.getFullYear();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var timeElement = document.querySelector('#time');
    html = `
<span> Bây giờ là ${hours}:${minutes}:${seconds} ${date}/${month}/${year}`;
    timeElement.innerHTML = html;
}

// Hàm tính tiền
function tinhTien() {
    var nguoiLon_arr = document.getElementsByClassName('nl');
    var treEm_arr = document.getElementsByClassName('te');
    var soTien_arr = document.getElementsByClassName('tien');

    var tongNguoiLon = 0;
    var tongTreEm = 0;
    var tongTien = 0;

    for(var i = 0; i < nguoiLon_arr.length; i++) {
        var soNguoiLon = nguoiLon_arr[i].innerText;
        var soTreEm = treEm_arr[i].innerText;
        soNguoiLon = parseInt(soNguoiLon);
        soTreEm = parseInt(soTreEm);

        tongNguoiLon += soNguoiLon;
        tongTreEm += soTreEm;

        var total = soNguoiLon*1000000 + soTreEm*600000;
        tongTien += total;
        var formatTotal = (String(tongTien)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        soTien_arr[i].innerText = formatTotal + ' VNĐ';
    }

    var formatTongTien = (String(tongTien)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    document.getElementById('tongnl').innerText = tongNguoiLon;
    document.getElementById('tongte').innerText = tongTreEm;
    document.getElementById('tongtien').innerText = formatTongTien + ' VNĐ';

}

function tien(obj) {
    var row = obj.parentNode;
    soNgLon = row.children[1].innerText;
    soTreEm = row.children[2].innerText;


    t = soNgLon*1000000 + soTreEm*600000;
    var formatT = (String(t)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    row.children[3].innerText = formatT + ' VNĐ';
    tinhTien();
}

function anHien() {
    var row_arr = document.getElementsByClassName('row');
    for(var i = 1; i < row_arr.length; i++) {
        if (row_arr[i].style.display == 'none') {
            row_arr[i].style.display = '';
        } else {
            row_arr[i].style.display = 'none';
        }
    }
}

start();