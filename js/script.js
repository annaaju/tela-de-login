var check = document.getElementById("check")
var form = document.getElementById("form_login")

check.addEventListener('change', function() {
    if (this.checked){
        form.classList.add('dark')
    } else {
        form.classList.remove('dark')
    }
})






