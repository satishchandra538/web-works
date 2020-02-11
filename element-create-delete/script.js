const create = document.getElementById('create');
const body = document.getElementsByTagName('body');
const dlt =  document.getElementById('dlt');
let x = 0;
const make = () => {
    //console.log('clicked')
    var child = document.createElement('p');
    child.id = x;
    child.addEventListener('click',dltf);
    child.innerHTML = `I am created ${x}`;
    child.setAttribute('class','center');
    //console.log(child.innerHTML)
    body[0].appendChild(child);
    x++;
}
create.addEventListener('click', make);

const dltf = (e) => {
    let element = document.getElementById(e.target.id);
    element.parentNode.removeChild(element);
}

dlt.addEventListener('click',dltf);