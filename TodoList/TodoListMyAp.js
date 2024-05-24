let taskBtn = document.querySelector('#addtastBtn');
let inputBox = document.querySelector('#newTask');
let toDoList = document.querySelector('.to-do-List');
let dragginTask = null;
function creatNewElement(newText)
{
    let newElement = document.createElement('div');
    newElement.innerHTML = `
    <span>${newText}</span>
    <button class= "EditBtn" >Edit</button>
    <button class= "deleteBtn" >Delete</button>
    `;
    newElement.style.color = "white";
    let DeleteBtn = newElement.querySelector('.deleteBtn');
    DeleteBtn.addEventListener('click',()=>{
        newElement.remove();
    });

    let EditBtn = newElement.querySelector('.EditBtn');
    EditBtn.addEventListener('click',()=>{
        let changedTaskText = prompt("Edit Your Task",newText);
        if(changedTaskText)
        {
            newElement.querySelector('span').innerText = changedTaskText;
        }
    });

    newElement.draggable = true;
    newElement.addEventListener('dragstart',()=>{
        dragginTask = newElement;
        newElement.classList.add('dragging');
    });
    newElement.addEventListener('dragend',()=>{
        newElement.classList.remove('dragging');
        toDoList.appendChild(dragginTask);
        // dragginTask = null;
    });

    toDoList.addEventListener('dragover',()=>{
        // let dragOverElement = newElement;
        toDoList.appendChild(dragginTask);
        dragginTask = null;
    })

    return newElement;
}


taskBtn.addEventListener('click',function (){
    let newText = inputBox.value.trim();
    if(newText !== "")
    {
        let newElement = creatNewElement(newText);
        toDoList.appendChild(newElement);
    }
    inputBox.value = "";
    
})