// let btn1 = document.querySelector('#btn1');
// btn1.onclick = () =>
// {
//     console.log(`Bonus Button is Clicked`);
//     let salary = Number(prompt("Enter You Salary"));
//     salary = salary + 100;
//     console.log(`My final salary bonus is ${salary}`);
// }

// let box = document.querySelector("#newdabba");

// box.onmouseover = () =>
// {
//     let pass = prompt("Enter The valid key to Access Password File");
//     if(pass == 'ram')
//     {
//         alert("You Can Access This File");
//     }
//     else
//     {
//         alert("You Are not Verified");
//     }
// }

// ------->>>>>[Multiple Events]

// let btn1 = document.querySelector('#btn1');
// btn1.onclick = (evt) =>
// {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
// }

// [Events Listener]

// let btn1 = document.querySelector('#btn1');
// btn1.addEventListener("click",()=> {console.log(`button was clicked`);});
// // btn1.addEventListener("click",Handle =()=> {alert("Good ONE!!");});
// const Handle = () => {alert("Good ONE!!");}
// const devote = () => {console.log(`Har Har Mahadev`);}
// btn1.addEventListener("click",devote);
// btn1.addEventListener("click",Handle);
// btn1.removeEventListener("click",Handle());
// btn1.removeEventListener("click",devote())

// let currentMode = "light";
// let themeChanger = document.querySelector('#ChangeTheme');
// themeChanger.addEventListener("click",()=>{
    
//     if(currentMode == 'light')
//     {
//         currentMode = 'Dark';
//         console.log("Dark");
//         document.querySelector("body").style.backgroundColor="black";
//     }
//     else
//     {
//         currentMode = 'light';
//         console.log("light");
//         document.querySelector("body").style.backgroundColor="white";
//     }
// })

// --->>[ Toggling Css Classes Thorugh JS ]

// --->>>[Use of classList.add && classList.remove]

let currentMode = "light";
let body = document.querySelector('body');
body.addEventListener("click",()=>{
    
    if(currentMode == 'light')
    {
        currentMode = 'Dark';
        console.log("Dark");
        // document.querySelector("body").style.backgroundColor="black";
        body.classList.add('dark');
        body.classList.remove('light');
    }
    else
    {
        currentMode = 'light';
        console.log("light");
        // document.querySelector("body").style.backgroundColor="white";
        body.classList.add('light');
        body.classList.remove('dark');
    }
})