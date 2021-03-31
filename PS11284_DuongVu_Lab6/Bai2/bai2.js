
function hienThi(v) {
    var vc = document.querySelector('#vc');
    vc.style.display = (v == true) ? '' : 'none';
}

function kiemTra() {
    thanhCong = true;
    thongBao = '';
    // code kiểm tra tên sp
    var sp = document.getElementById('tensp');
    if (sp.value.length == 0) {
        thongBao += 'Vui lòng nhập trên sản phẩm<br>';
        thanhCong = false
    }
    // kiểm tra giá
    var gia = document.getElementById('gia');
    if (gia.value == '') {
        thongBao += 'Bạn chưa nhập giá<br>';
        thanhCong = false;
    }
    if (isNaN(gia.value) == true) {
        thongBao += 'Bạn cần nhập giá là số nhé<br>';
        thanhCong = false;
    }
    if (parseInt(gia.value) <= 0) {
        thongBao += 'Bạn phải nhập giá là số dương<br>';
        thanhCong = false;
    }
    // kiểm tra loại sản phẩm
    var loai = document.getElementById('loai');
    if (loai.value == '') {
        thongBao += 'Chọn 1 loại sản phẩm đi <br>';
        thanhCong = false;
    }
    // kiểm tra nơi nhận hàng
    var radios = document.getElementsByName('diachi');
    if (radios[0].checked == false && radios[1].checked == false) {
        thongBao = 'Vui lòng chọn nơi giao hàng';
        thanhCong = false;
    }

    if (thongBao == '') {
        thongBao = 'Nhập đúng dữ liệu';
    }
    document.getElementById('kq').innerHTML = thongBao;
    return thanhCong;
}