window.onload = window.onhashchange = function() {
    document.body.innerText = location.hash;
}

var sw;
async function main() {
    sw = await navigator.serviceWorker.register("sw.js");
}
main();