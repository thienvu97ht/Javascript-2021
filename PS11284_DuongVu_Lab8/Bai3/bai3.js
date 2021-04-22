var selected = $('#courses');
var btnRedict = $('.btn-select')
var html;

function selectValue() {
    if (selected.val() == 'b1') {
        return html = 'https://longnv.name.vn/lap-trinh-javascript/javascript-la-gi';
    }

    if (selected.val() == 'b2') {
        return html = 'https://longnv.name.vn/lap-trinh-javascript/bien-kieu-toan-tu-va-bieu-thuc-trong-javascript';
    }

    if (selected.val() == 'b3') {
        return html = 'https://longnv.name.vn/lap-trinh-javascript/cau-truc-dieu-khien-trong-javacript';
    }

    if (selected.val() == 'b4') {
        return html = 'https://longnv.name.vn/lap-trinh-javascript/lap-trinh-doi-tuong-trong-javascript-va-mo-hinh-bom';
    }

    if (selected.val() == 'b5') {
        return html = 'https://longnv.name.vn/lap-trinh-javascript/mo-hinh-dom-trong-javascript';
    }

    if (selected.val() == 'b6') {
        return html = 'https://longnv.name.vn/lap-trinh-javascript/vai-van-de-bo-sung-trong-javascript';
    }

    if (selected.val() == 'b7') {
        return html = 'https://longnv.name.vn/lap-trinh-javascript/kiem-tra-du-lieu-trong-form-voi-javascript';
    }

    if (selected.val() == 'b8') {
        return html = 'https://longnv.name.vn/lap-trinh-javascript/gioi-thieu-ve-javascript-framework';
    }
}


 
function redirect() {
    if(selectValue() === undefined) {
        alert('Vui lòng chọn bài học!')
    } else {
        window.location = selectValue();
    }
}