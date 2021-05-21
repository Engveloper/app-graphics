import { getContainerSPA, getPage } from './util.js'

const main = getContainerSPA();

getPage("../pages/main.html").then((response) => {
    main.innerHTML = response
})

const accountBtn = document.querySelector('#accountBtn')

accountBtn.addEventListener('click', (event) => {
    getPage("../pages/login.html").then((response) => {
        main.innerHTML = response
        console.log('test')
    })
})
