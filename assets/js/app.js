window.onload = function () {

    var btn = document.getElementById('button-change');
    var txt = document.getElementById('paragraph');
    var btnDos = document.getElementById('magic');
    var txtMagic = document.getElementById('text');

    btn.addEventListener('click', function () {
        txt.innerHTML = '<h2> Git y Github te amamos </h2>';
    })

    btnDos.addEventListener('click', function () {
       // forma 1 ... txtMagic.innerHTML = ''
       txtMagic.classList.add('disappear')
    })
}