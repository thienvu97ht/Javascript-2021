function start() {
    renderProducts(products);
    disable();
}

var products = [{
        id: 0,
        name: 'Iphone 12 Pro Max',
        price: 31690000
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
        <tr>
            <td><input type="checkbox" class="chon" onchange="check(${product.id})"></td>
            <td>${product.name}</td>
            <td name="gia">${formatPrice} VNĐ</td>
            <td><input type="text" class="quantity" onkeyup="tongTien()"></td>
            <td><span class="giasp"></span></td>
            <td>
                <a class="edit" title="Edit" onclick="handleUpdateSv(${product.id})">
                    <i class="material-icons">&#xE254;</i>
                </a>
                <a class="delete" title="Delete" onclick="handleDeleteSv(${product.id})">
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

// Thêm sản phẩm


start();