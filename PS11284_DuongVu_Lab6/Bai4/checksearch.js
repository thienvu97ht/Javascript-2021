function checksearch() {
    if (document.formtim.tukhoa.value == 'Tìm kiếm') {
        alert('Bạn chưa nhập từ khóa tìm kiếm');
        document.formtim.tukhoa.focus();
        return false;
    }
    return true;
}