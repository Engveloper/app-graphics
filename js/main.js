import {loadProducts} from './load-products.js'

const main = getContainerSPA();

const navigation = {
    Inicio: getHome,
    Productos: getProducts,
}

const navLinks = document.querySelectorAll('nav li a')

navLinks.forEach((navLink) => {
    navLink.addEventListener('click', (event) => {
        event.preventDefault()
        const name = navLink.innerHTML
        const navigate = navigation[name]
        navigate && navigate()
    })
})

const accountBtn = document.querySelector('#accountBtn')

accountBtn.addEventListener('click', (event) => {
    getPage("../pages/login.html").then((response) => {
        main.innerHTML = response
    })
})

function getContainerSPA(){
    return document.getElementById('actual-page');
}

async function getPage(location){
    const f = await fetch(location);
    return await f.text();
}

async function getHome(){
    const main = getContainerSPA();
    const page = await getPage("../pages/main.html");
    main.innerHTML = page;
}

async function getLogin(){
    const main = getContainerSPA();
    const page = await getPage("../pages/login.html");
    main.innerHTML = page;
}

async function getSignUp(){
    const main = getContainerSPA();
    const page = await getPage("../pages/signup.html");
    main.innerHTML = page;
}

async function getProducts(){
    const main = getContainerSPA();
    const page = await getPage("../pages/products.html");
    main.innerHTML = page;
    loadProducts()
}

getHome();