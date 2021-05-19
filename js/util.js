export function removeChilds(nodeElement){
    while(nodeElement.firstElement){
        nodeElement.removeChild(nodeElement.firstElement);
    }
}

export function getContainerSPA(){
    return document.getElementById('actual-page');
}

export async function getPage(location){
    const f = await fetch(location);
    return await f.text();
}