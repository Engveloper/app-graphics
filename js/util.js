export function removeChilds(nodeElement){
    while(nodeElement.firstElement){
        nodeElement.removeChild(nodeElement.firstElement);
    }
}

export function innerHTML(nodeElement, html){
    nodeElement.innerHTML(html);
}