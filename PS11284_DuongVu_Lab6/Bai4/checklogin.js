function checklogin() {
    if (document.flogin.u.value == '') {
        alert('Bạn chưa nhập username');
        document.flogin.u.focus();
        return false;
    }
    if (document.flogin.p.value == '') {
        alert('Bạn chưa nhập password');
        document.flogin.p.focus();
        return false;
    }
}