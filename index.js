const bar= document.getElementById('bar');
const nav= document.getElementById('navbar');
const close= document.getElementById('close');
const price= document.getElementById('price');
const subtotal=document.getElementById('subtotal');
console.log("Hello1");
console.log(bar);
if(bar){
    console.log("Hello");
    bar.addEventListener('click',() =>{
        nav.classList.add('activee');
        console.log("clicked")
    })
}

if(close){
    console.log("Remove")
    close.addEventListener('click',() => {
        nav.classList.remove('activee');
        console.log("delete")
    })
}


var noti = document.querySelector('#lg-bag');
var select = document.querySelector('#select');
var button = document.getElementsByTagName('button');
for(but of button){
    but.addEventListener('click', (e) =>{
        var add = Number(noti.getAttribute('data-count')|| 0);
        noti.setAttribute('data-count',add +1 );
        noti.classList.add('zero');


        var parent = e.target.parentNode;
        var clone = parent.cloneNode(true);
        select.appendChild(clone);
        clone.lastElementChild.innerText = "Buy-Now";
    })
}

price.addEventListener('click', ()=>{

})