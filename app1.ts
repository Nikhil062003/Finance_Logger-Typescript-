"use strict";
const form1 = document.querySelector('.new-item-form') as HTMLFormElement;
//console.log(form.children);
//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details')as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
const outlist = document.querySelector('.item-list')!;
form1.addEventListener('submit', (e:Event) => {
    e.preventDefault();
    let div=document.createElement('div');
    div.setAttribute("style","border:1px solid grey; margin-bottom:10px");
    let p=document.createElement("p");
    p.setAttribute("style","color:#ff0aa7");
    let p1=document.createElement("p");
    p.innerHTML+="<h3>"+type.value.toUpperCase()+"</h3>";
    p1.innerHTML+=tofrom.value+" owes Rs "+amount.value +" for "+details.value;
    div.appendChild(p);
    div.appendChild(p1);
    outlist.appendChild(div);
      
});
