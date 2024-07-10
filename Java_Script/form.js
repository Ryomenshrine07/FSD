let nameBox = document.querySelector('.nameBox');
let passwordBox = document.querySelector('.passBox');
let submitBtn = document.querySelector('button');
let fromBox = document.querySelector('form');

// submitBtn.addEventListener('submit',(obj)=>{
//     obj.preventDefault();
//     let name = nameBox.value;
//     let password = passwordBox.value;
//     console.log(`Name is ${name} and Password is ${password}`);
// } )

fromBox.addEventListener('submit',(obj)=>{
    obj.preventDefault();
    console.log(fromBox.elements);
    console.log(fromBox.elements[0].value);
    console.log(fromBox.elements[1].value);
    console.log(`Hello`);
});