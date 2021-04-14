
var nameSpInput = document.querySelector('input[name="tensp"]');
var soLuongInput = document.querySelector('input[name="soluong"]');
var nsxInput = document.querySelector('select[name="nsx"]');
var tinhTrangInput = document.querySelectorAll('input[name="tinhtrang"]');
var mauSacInput = document.querySelectorAll('input[type="checkbox"]');
var messageErr = document.querySelector('.form-message');

// Điều kiện
/* 
    2 <= nameSpInput.length <= 30
    1 < = parseInt(soLuongInput.value) <= 100
    nsxInput.value == 1, 2 ,3

    
*/

function kiemTra() {
    if (nameSpInput.value.length >= 2 && nameSpInput.value.length <= 30) {
        undefined
    } else {
        messageErr.innerHTML = `Vui lòng nhập tên sản phẩm lớn 2 và ít hơn 30 ký tự`;
        break;
    }
}