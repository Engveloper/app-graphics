import { getContainerSPA, getPage } from './util.js'

const main = getContainerSPA();
const page = await getPage("../pages/main.html");
main.innerHTML = page;
