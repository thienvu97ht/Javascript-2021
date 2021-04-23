var btnChangeColor = document.querySelector('#btn-change');
var pTag = document.getElementsByTagName('p');
var kq = document.getElementById('kq');

function changeColor() {
    for( i = 0; i < pTag.length; i++) {
        pTag[i].style.color = 'red';
    }
};

function showMe() {
    kq.innerHTML = 'Bé giỏi lắm'
};

