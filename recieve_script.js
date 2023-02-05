window.onload = window.onhashchange = function() {
    document.body.innerText = location.hash;
}