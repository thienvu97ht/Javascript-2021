// Khởi chạy ứng dụng
function start() {
    disableBtn();
    setInterval('showTime()', 1000);
}

// Số lần giải
var soLan = sessionStorage.getItem('soLanGiai');
if (soLan == null) {
    soLan = 0;
}
document.querySelector('#solan').innerHTML = soLan;

// Get input number Element
var inputElementA = document.querySelector('#numberA');
var inputElementB = document.querySelector('#numberB');
var phepTinhElement = document.querySelectorAll('input[name="calculation"]');

// Get phép tính
function phepTinh(phepTinhElement) {
    var phepTinh;
    for (var i = 0; i < 4; i++) {
        if (phepTinhElement[i].checked) {
            phepTinh = phepTinhElement[i];
        }
    }
    return phepTinh;
}

// Get btn Element
var randomBtn = document.querySelector('#random');
var giaiPtBtn = document.querySelector('#giai');


// Add Event
randomBtn.addEventListener('click', getNumberRandom);
giaiPtBtn.addEventListener('click', giaiPT);


// Hàm cho số ngẫu nhiên
function getNumberRandom() {
    var numberRandom1 = Math.floor(Math.random() * 11);
    var numberRandom2 = Math.floor(Math.random() * 11);
    var numberRandom3 = Math.floor(Math.random() * 4);
    inputElementA.value = numberRandom1;
    inputElementB.value = numberRandom2;
    phepTinhElement[numberRandom3].checked = true;

    unDisableBtn();
}

// Hàm tăng biến đếm và in ra số lần
function getCount() {
    soLan++;
    sessionStorage.setItem('soLanXem', soLan);
    document.querySelector('#solan').innerHTML = soLan;
}

// Hàm disable button giải phương trình
function disableBtn() {
    giaiPtBtn.disabled = true;
    giaiPtBtn.classList.add('disable');
}

// Hàm undisable button giải phương trình
function unDisableBtn() {
    giaiPtBtn.disabled = false;
    giaiPtBtn.classList.remove('disable');
}

// Khi value input thay đổi gọi đến hàm getValueChange
inputElementA.addEventListener('input', getValueChange);
inputElementB.addEventListener('input', getValueChange);


// Hàm get value input
function getValueChange() {
    unDisableBtn();
}

// Hàm kiểm tra
function kiemTra(numberA, numberB, ketQua) {

    if (numberA > 10 || numberB > 10 ||  numberA < 0 || numberB < 0) {
        ketQua.innerHTML = `<p>Vui lòng nhập số A và B từ 0 đến 10</p>`;
    }

    if (isNaN(numberA) || isNaN(numberB)) {
        ketQua.innerHTML = `<p>Vui lòng nhập cả 2 số </p>`;
    }
}

// Hàm gải phương trình
function giaiPT() {
    var ketQua = document.querySelector('#ketQua');

    numberA = parseInt(inputElementA.value);
    numberB = parseInt(inputElementB.value);
    phepToan = phepTinh(phepTinhElement).value;

    switch (phepToan) {
        case 'cong': {
            var result = numberA + numberB;
            phepToan = 'cộng';
            ketQua.innerHTML = `Kết quả của phép tính ${numberA} ${phepToan} ${numberB} là ${result}`;
            break;
        }
        case 'tru': {
            var result = numberA - numberB;
            phepToan = 'trừ';
            ketQua.innerHTML = `Kết quả của phép tính ${numberA} ${phepToan} ${numberB} là ${result}`;
            break;
        }
        case 'nhan': {
            var result = numberA * numberB;
            phepToan = 'nhân';
            ketQua.innerHTML = `Kết quả của phép tính ${numberA} ${phepToan} ${numberB} là ${result}`;
            break;
        }
        case 'chia': {
            var result = (numberA / numberB).toFixed(2);
            ketQua.innerHTML = `Kết quả của phép tính ${numberA} ${phepToan} ${numberB} là ${result}`;
            break;
        }
        default: {
            // do something
        }
    }

    // Gọi hàm getCount
    getCount();

    // Gọi hàm disable button
    disableBtn();

    kiemTra(numberA, numberB, ketQua);
}

/* ------------------------------------------- */

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
        <span> Bây giờ là ${date}/${month}/${year} ${hours}:${minutes}:${seconds}
    `
    timeElement.innerHTML = html;
}

start();

/* 
    1. Tự động cho số từ 0 đến 10
    2. Tự động gán phép tính
    3. Hiển thị giờ
    4. Tính số lần giải
    5. Ép kiểu cho giá trị nhập vào là số
    6. Khi thay đổi giá trị sẽ tự enable button
    7. Bắt lỗi trên form
    8. Giá trị nhập vào phải là số từ 0 đến 10
*/