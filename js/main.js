const main = getContainerSPA();

const accountBtn = document.querySelector('#accountBtn')

accountBtn.addEventListener('click', (event) => {
    getPage("../pages/login.html").then((response) => {
        main.innerHTML = response
        console.log('test')
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

getHome();