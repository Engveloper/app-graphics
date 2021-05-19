const main = document.getElementById('actual-page');
console.log(main);
var ajax = new XMLHttpRequest();
ajax.open("GET", "../pages/main.html", false);
ajax.send()
main.innerHTML = ajax.responseText;
