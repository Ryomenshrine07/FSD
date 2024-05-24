let todobtn=document.querySelector('#addtastBtn');
let todotext=document.querySelector('#newTask');
let todolist=document.querySelector('.to-do-List');
let dragelement=null;

function creatNewElement(newtext)
{
     let newElement=document.createElement('div')
     newElement.innerHTML=`
     <span>${newtext}</span>
     <button class="editbtn">Edit</button>
     <button class="deletebtn">delete</button>
     `
     let newedit=newElement.querySelector('.editbtn')
     newedit.addEventListener('click',()=>{
     let  newvalue  =prompt("enter a value",newtext)
        newElement.querySelector('span').innerText=newvalue  
     })
     let newdelete=newElement.querySelector('.deletebtn')
     newdelete.addEventListener('click',()=>{
         newElement.remove();
     }) 
     newElement.draggable=true;
     newElement.addEventListener('dragstart',()=>{
        newElement.classList.add('dragging');
          dragelement=newElement;
     })
     newElement.addEventListener('dragend',()=>{
        newElement.classList.remove('dragging');
        todolist.appendChild(dragelement);
     })
     return newElement;
}
todobtn.addEventListener('click',()=>{
    let newtext=todotext.value.trim();
    if(newtext!=="")
    {
        let newElement=creatNewElement(newtext)
        todolist.appendChild(newElement);
        todotext.value="";
    }
})