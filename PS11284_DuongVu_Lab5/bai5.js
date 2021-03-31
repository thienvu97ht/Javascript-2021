// Khởi chạy ứng dụng
function start() {
    setInterval('showTime()', 1000);
}

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
<span> Bây giờ là ${hours}:${minutes}:${seconds} ${date}/${month}/${year}`;
    timeElement.innerHTML = html;
}


start();