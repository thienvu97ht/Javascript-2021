var daiInput = document.querySelector('input[name="dai"]');
var rongInput = document.querySelector('input[name="rong"]');
var errElement = document.querySelector('.form-message.text-center');

var chuVi = document.querySelector('span[name="chuvi"]');
var dienTich = document.querySelector('span[name="dientich"]');

// Kiểm tra chữ
function kiemTraChu() {
    var dai = daiInput.value;
    var rong = rongInput.value;

    if (isNaN(parseInt(dai))) {
        errElement.innerHTML = `Vui lòng nhập số`;
        chuVi.innerHTML = ``; 
        dienTich.innerHTML = ``; 
    } else {
        chuVi.innerHTML = (parseInt(dai) + parseInt(dai)) * 2;
        dienTich.innerHTML = (parseInt(dai) * parseInt(dai))
        errElement.innerHTML = ``;
    }

    if (isNaN(parseInt(rong))) {
        errElement.innerHTML = `Vui lòng nhập số`;
        chuVi.innerHTML = ``; 
        dienTich.innerHTML = ``; 
    } else {
        chuVi.innerHTML = (parseInt(dai) + parseInt(dai)) * 2;
        dienTich.innerHTML = (parseInt(dai) * parseInt(dai))
        errElement.innerHTML = ``;
    }
}

// Kiểm tra số
function kiemTraSo() {
    if (daiInput.value > 10 || daiInput.value < 0) {
        errElement.innerHTML = `Vui lòng nhập số từ 0 đến 10`;
        chuVi.innerHTML = ``; 
        dienTich.innerHTML = ``; 
    }

    if (rongInput.value > 10 || rongInput.value < 0) {
        errElement.innerHTML = `Vui lòng nhập số từ 0 đến 10`;
        chuVi.innerHTML = ``; 
        dienTich.innerHTML = ``; 
    }
}

