var overlayElement = document.querySelector('.overlay');
var formElement = document.querySelector('.main-form');

var createBtn = document.querySelector('#create');
var btnUpdate = document.querySelector('#update');

var nameInputElement = document.querySelector('#name');
var priceInputElement = document.querySelector('#priceForm');

function start() {
    overlayElement.style.display = 'none';
    formElement.style.display = 'none';
    document.querySelector('#update').style.display = 'none';
    renderProducts(products);
    disable();
}

var products = [{
        id: 0,
        name: 'Iphone 12 Pro Max',
        price: 28690000
    },
    {
        id: 1,
        name: 'Samsung Galaxy A52',
        price: 10590000
    },
    {
        id: 2,
        name: 'Xiaomi Redmi Note 10',
        price: 4390000
    },
    {
        id: 3,
        name: 'Vsmart Aris Pro',
        price: 8490000
    },
    {
        id: 4,
        name: 'Oppo A15',
        price: 3490000
    },
    {
        id: 5,
        name: 'OnePlus 8 Pro 5G',
        price: 21990000
    },
    {
        id: 6,
        name: 'Nokia 5.4',
        price: 3890000
    },
]

// Render sản phẩm
function renderProducts() {
    var listProductsBlock = document.getElementById('list-products');
    var htmls = products.map(function (product) {
        var formatPrice = (String(product.price)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return `
        <tr class="Product-item-${product.id}">
            <td><input type="checkbox" class="chon" onchange="check(${product.id})"></td>
            <td>${product.name}</td>
            <td name="gia">${formatPrice} VNĐ</td>
            <td><input type="text" class="quantity" onkeyup="tongTien()"></td>
            <td><span class="giasp"></span></td>
            <td>
                <a class="edit" title="Edit" onclick="handleUpdateProduct(${product.id})">
                    <i class="material-icons">&#xE254;</i>
                </a>
                <a class="delete" title="Delete" onclick="handleDeleteProduct(${product.id})">
                    <i class="material-icons">&#xE872;</i>
                </a>
            </td>
        </tr>
        `
    });
    listProductsBlock.innerHTML = htmls.join('');
};

// Hàm disable ban đầu
function disable() {
    var arrSL = document.querySelectorAll('.quantity');
    for (var i = 0; i < arrSL.length; i++) {
        arrSL[i].disabled = true;
    }
}

// Hàm thay đổi khi check
function check(i) {
    var arrCheck = document.querySelectorAll('input[type="checkbox"]');
    var arrSL = document.querySelectorAll('.quantity');
    if (arrCheck[i].checked) {
        arrSL[i].disabled = false;
    } else {
        arrSL[i].disabled = true;
    }
    tongTien();
}

function tongTien() {
    var arrCheck = document.querySelectorAll('input[type="checkbox"]');
    var arrSL = document.querySelectorAll('.quantity');
    var arrGiaSp = document.querySelectorAll('.giasp');
    var tongTien = 0;

    for (var i = 0; i < arrCheck.length; i++) {
        if (arrCheck[i].checked) {
            arrSL[i].value === '' ? arrSL[i].value = '0' : undefined;
            var soLuong = parseInt(arrSL[i].value);
            var gia = products[i].price
            tongTien += soLuong * gia;
            var formatTongGia = (String(soLuong * gia)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            arrGiaSp[i].innerHTML =formatTongGia + ' VNĐ';
        } else {
            arrSL[i].value = ''
            arrGiaSp[i].innerHTML = '';
        }
    }

    var formatTotal = (String(tongTien)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.getElementById('tinhtong').innerText = formatTotal + ' VNĐ';
}

// 
function changePrice() {
    var arrGia = document.getElementsByName('gia');
    var obj = document.getElementById('mucGia');
}

// Hàm showTable
// Hàm nút bấm ẩn hiện form
function showForm() {

    if (overlayElement.style.display == 'none' || formElement.style.display == 'none') {
        overlayElement.style.display = 'block';
        formElement.style.display = 'block';
    }
};

function hideForm() {
    if (overlayElement.style.display == 'block' || formElement.style.display == 'block') {
        overlayElement.style.display = 'none';
        formElement.style.display = 'none';

        nameInputElement.value = '';
        priceInputElement.value = '';

        createBtn.style.display = 'block';
        btnUpdate.style.display = 'none';
    }
};

// Thêm sản phẩm
function addProduct() {
    var id = products.length;
    var name = nameInputElement.value;
    var price = priceInputElement.value;

    var data = {
        id,
        name, 
        price
    };

    products.push(data);
    document.querySelector('.main-form').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';

    nameInputElement.value = '';
    priceInputElement.value = '';
    renderProducts();
    disable();
}

// Sửa sản phẩm
function handleUpdateProduct(id) {
    
    showForm(); 
    nameInputElement.value = products[id].name;
    priceInputElement.value = products[id].price;

    createBtn.style.display = 'none';
    btnUpdate.style.display = 'block';

    btnUpdate.onclick = function () {
        var newName = document.querySelector('input[name="name"]');
        var newPrice = document.querySelector('input[name="priceForm"]');

        var formData = {
            id: id,
            name: newName.value,
            price: newPrice.value,
        }

        if (formData) {
            products.splice(id, 1, formData);
        }


        nameInputElement.value = '';
        priceInputElement.value = '';

        createBtn.style.display = 'block';
        btnUpdate.style.display = 'none';
        hideForm();
        renderProducts();
        disable();
    }
};

// Xóa sản phẩm
function handleDeleteProduct(id) {
    var index = products.findIndex((product) => product.id === id);
    var result = confirm(`Bạn có muốn xóa sản phẩm ${products[index].name} không?`);

    result ? products.splice(index, 1) : undefined;
    renderProducts();
    disable();
}

start();