const input = document.getElementById('input');
const addButton = document.getElementById('add');
const ol = document.getElementById('ordered-list');
const searchBtn = document.getElementById('searchBtn');
const searchText = document.getElementById('searchText');
//console.log(input.value)
const deleteit = (e) => {
    //console.log(e.target.parentNode.id)
    const p = document.getElementById(e.target.parentNode.id)
    p.parentNode.removeChild(p)
}
function add(){
    const li = document.createElement('li'); 
    li.innerHTML = input.value;
    li.setAttribute("class","li");
    li.id = Date.now();
    ol.appendChild(li);
    //input.value = null;
    const i = document.createElement('i');
    i.setAttribute('class', 'fa fa-trash trash');
    i.addEventListener('click',deleteit);
    //i.innerHTML = "  in";
    li.appendChild(i);
    //console.log(li)
}
const searchFxn = () => {
    const list = ol.getElementsByTagName('li');
    //console.log(list.length)
    for(let i = 0; i < list.length; i++){
        //console.log(list[i].innerText);
        if(searchText.value == list[i].innerText){
            list[i].setAttribute('class','found')
        }else{
            list[i].style.display = 'none'
            //console.log(list.length)
        }
    }
}
searchBtn.addEventListener('click', searchFxn)
addButton.addEventListener('click', add)