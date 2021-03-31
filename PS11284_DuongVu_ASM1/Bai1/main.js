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
var inputElementC = document.querySelector('#numberC');

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
    var numberRandom3 = Math.floor(Math.random() * 11);
    inputElementA.value = numberRandom1;
    inputElementB.value = numberRandom2;
    inputElementC.value = numberRandom3;

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
inputElementC.addEventListener('input', getValueChange);

// Hàm get value input
function getValueChange() {
    unDisableBtn();
}

// Hàm kiểm tra
function kiemTra(numberA, numberB, numberC, phuongTrinh) {

    if (numberA > 10 || numberB > 10 || numberC > 10 || numberA < 0 || numberB < 0 || numberC < 0) {
        phuongTrinh.innerHTML = `<p>Vui lòng nhập số a, b, c từ 0 đến 10</p>`;
        ketQua.innerHTML = ``;
    }
}

// Hàm gải phương trình
function giaiPT() {
    var phuongTrinh = document.querySelector('#phuongTrinh');
    var ketQua = document.querySelector('#ketQua');

    numberA = inputElementA.value;
    numberB = inputElementB.value;
    numberC = inputElementC.value;


    if(numberA == 0) {
         
        if(numberB == 0) {
            if (numberC == 0) {
                phuongTrinh.innerHTML = `<p>Phương trình có vô số nghiệm</p>`;
                ketQua.innerHTML = ``;
                 
            } else {
                phuongTrinh.innerHTML = `<p>Phương trình vô nghiệm</p>`;
                ketQua.innerHTML = ``;
            }
        } else {
            var x = Number((-numberC/numberB).toFixed(2));
            var sum = x + x;
            var product = (x * x).toFixed(2);
            phuongTrinh.innerHTML = `<p>Phương trình có nghiệm duy nhất</p>`;
            ketQua.innerHTML = 
            `<p>x<sub>1</sub> = x<sub>2</sub> = ${x}</p>
             <p>Tổng của x<sub>1</sub> + x<sub>2</sub> là = ${sum}</p>
             <p>Tích của x<sub>1</sub> * x<sub>2</sub> là = ${product}</p>
            `;
        }
    } else {
        var delta = numberB*numberB - 4*numberA*numberC;
        if(delta > 0) {
            var x1 = Number(((-numberB+Math.sqrt(delta))/(2*numberA)).toFixed(2));
            var x2 = Number(((-numberB-Math.sqrt(delta))/(2*numberA)).toFixed(2));
            var sum = x1 + x2;
            var product = (x1 * x2).toFixed(2);

            phuongTrinh.innerHTML = `<p>Phương trình có 2 nghiệm phân biệt</p>`;
            ketQua.innerHTML = 
            `<p>x<sub>1</sub> = ${x1}</p>
             <p>x<sub>2</sub> = ${x2}</p>
             <p>Tổng của x<sub>1</sub> + x<sub>2</sub> là = ${sum}</p>
             <p>Tích của x<sub>1</sub> * x<sub>2</sub> là = ${product}</p>`;
        } else if ( delta == 0) {
            var x = Number(-numberB/2*numberA).toFixed(2);
            var sum = x + x;
            var product = (x * x).toFixed(2);
            phuongTrinh.innerHTML = `<p>Phương trình có nghiệm kép</p>`;
            ketQua.innerHTML = 
            `<p>x<sub>1</sub> = x<sub>2</sub> = ${x}</p>
             <p>Tổng của x<sub>1</sub> + x<sub>2</sub> là = ${sum}</p>
             <p>Tích của x<sub>1</sub> * x<sub>2</sub> là = ${product}</p>
            `;
        } else {
            phuongTrinh.innerHTML = `<p>Phương trình vô nghiệm</p>`;
            ketQua.innerHTML = ``;
        }
    }

    
    // Gọi hàm getCount
    getCount();

    // Gọi hàm disable button
    disableBtn();

    kiemTra(numberA, numberB, numberC, phuongTrinh);
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
