
// Số lần giải
var soLan = sessionStorage.getItem('soLanGiai');
if (soLan == null) {
    soLan = 0;
}
document.querySelector('#solan').innerHTML = soLan;

// Get input number element
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
}

// Hàm gải phương trình
function giaiPT() {
    numberA = inputElementA.value;
    numberB = inputElementB.value;
    numberC = inputElementC.value;

    if(numberA == 0) {
         
        if(numberB == 0) {
            if (numberC == 0) {
            	alert('Phuong trinh vo so nghiem')
                 
            } else {
                alert('Phuong trinh vo nghiem')
            }
        } else {
            alert('Phuong trinh co nghiem duy nhat: '+(-numberC/numberB))
        }
    } else {
        var delta = numberB*numberB - 4*numberA*numberC;
        if(delta > 0) {
            var x1 = ((-numberB+Math.sqrt(delta))/(2*numberA)).toFixed(2);
            var x2 = ((-numberB-Math.sqrt(delta))/(2*numberA)).toFixed(2);
            alert('Nghiem thu nhat x1 = '+x1+'\n Nghiem thu hai x2 = '+x2)
        } else if ( delta == 0) {
        	var sum = -numberB/2*numberA
            alert('Phuong trinh co nghiem kep: x1 = x2 = '+sum)
        } else {
            alert('Phuong trinh vo nghiem')
        }
    }

    // Gọi hàm getCount
    getCount();
}

// Hàm tăng biến đếm và in ra số lần
function getCount() {
    soLan++;
    sessionStorage.setItem('soLanXem', soLan);
    document.querySelector('#solan').innerHTML = soLan;
}

// Hàm disable button giải phương trình

