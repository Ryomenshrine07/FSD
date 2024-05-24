// ==============================================================================================
// ==============================================================================================

//--------->>>>>>> [Selectors]

// const firstHead = document.getElementById("Head1");
// console.log(firstHead);

// firstHead.style.color = "red";

// const DM = document.getElementsByTagName("h1");
// console.log(DM);

// for(let val of DM)
// {
//     val.style.color = "red";
//     val.style.fontSize = "20px";
// }

// let ClassDoc = document.getElementsByClassName("Head1");
// console.log(ClassDoc);

// ==============================================================================================
// ==============================================================================================

// ---------->>>>>>>>>>>[Queary Selectors]

// let tag = document.querySelectorAll('.raam');
// console.log(tag);

// let ptag = document.querySelector('p');
// // [Use InnerText to get text inside the tag this will include all css properties applied to text]
// console.log(ptag.innerText); 

// const p2tag = document.querySelector('p');
// // [Use textContent to get text inside the tag this will show complete text dose'nt matter what properties applied to it]
// console.log(p2tag.textContent);

// let h1tag = document.querySelector('h1');
// h1tag.innerText = 'Jai Mata Di'; // [Changing Text]

// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));


// const newLink = document.querySelector('a');
// // [Using setAttribute , this requires two parameter ('attributeName','Value')]
// newLink.setAttribute('href',"https://chat.openai.com/");

// ==============================================================================================
// ==============================================================================================

// let box = document.querySelector('.box');
// box.onmouseover = () =>
// {
//     if(box.innerText == "You're out")
//     {
//         box.innerText = "You're in";
//     }
//     else
//     {
//         box.innerText = "You're out";
//     }
// }
// box.onmouseout = () =>
// {
//     if(box.innerText == "You're out")
//     {
//         box.innerText = "You're in";
//     }
//     else
//     {
//         box.innerText = "You're out";
//     }
// }

// ==============================================================================================
// ==============================================================================================

//  [ Event Listeners ]
 
// let box = document.querySelector('body');
// color = "dark";
// box.addEventListener("click",() =>{
//     if(color == "dark")
//     {
//         color = "light";
//         console.log("light");
//         box.classList.add("light");
//         box.classList.remove("dark");
//     }
//     else
//     {
//         color = "dark";
//         console.log("Dark");
//         box.classList.add("dark");
//         box.classList.remove("light");
//     }
// });

// let body = document.querySelector('body');
// let box = document.querySelector('.box');

// bodyTheme = "light";
// boxTheme = "dark";
// body.onclick = () =>
// {
//     if(bodyTheme == "light")
//     {
//         bodyTheme = "dark";
//         boxTheme = "light";
//         console.log(`Body Backgound is ${bodyTheme}`);
//         console.log(`Box Background is ${boxTheme}`);
//         body.classList.add('dark');
//         body.classList.remove('light');
//         box.classList.add('boxLight');
//         box.classList.remove('boxDark');
//     }
//     else
//     {
//         bodyTheme = "light";
//         boxTheme = "dark";
//         console.log(`Body Backgound is ${bodyTheme}`);
//         console.log(`Box Background is ${boxTheme}`);
//         body.classList.add('light');
//         body.classList.remove('dark');
//         box.classList.add('boxDark');
//         box.classList.remove('box.Light');
//     }
//     setTimeout(alertMessage = () =>{
//         alert("You've Changed The Theme");
//     },1500);
// }


// body.addEventListener("click",alertMessage);
// setInterval(()=>{console.log(`Let's Get it!!!`);},1000)

// let Names = ['Vinayak','Priyanka','Manjari','Anshu','Virat'];

// function displayNamesOnebyOne(name,nextName)
// {
//     setTimeout(()=>{
//         console.log(`${name}`);
//     if(nextName)
//     {
//         nextName();
//     }
//     },2000)
// }
// let count = 1;

// ==============================================================================================
// ==============================================================================================

//  [ Practice ]

// displayNamesOnebyOne(Names[0],()=>{
//     console.log(`Getting Name 2....`);
//     displayNamesOnebyOne(Names[1],()=>{
//         console.log(`Getting Name 3....`);
//         displayNamesOnebyOne(Names[2],()=>{
//             console.log(`Getting Name 4....`);
//             displayNamesOnebyOne(Names[3],()=>{
//                 console.log(`Getting Name 5....`);
//                 displayNamesOnebyOne(Names[4]);
//                 })
//             })
//         })
//     })

// for(let i in Names)
// {
//     displayNamesOnebyOne(Names[i],()=>{console.log(`Getting Name ${++count}`);})
// }

// function additionOfTwoNum(a,b,sumCallback)
// {
//     setTimeout(()=>{
//         console.log(`Addtion of ${a} and ${b} is : ${a+b}`);
//         if(sumCallback)
//         {
//             sumCallback();
//         }
//     },3000)
// }

// additionOfTwoNum(3,5,()=>{
//     console.log(`Getting sum 2....`);
//     additionOfTwoNum(7,10,()=>{
//         console.log(`Getting sum 3....`);
//         additionOfTwoNum(11,25,()=>{
//             console.log(`Getting sum 4....`);
//             additionOfTwoNum(20,4);
//         })
//     })
// });

// ==============================================================================================
// ==============================================================================================



let sec = document.getElementById('section');
let head = document.createElement('h1');
let head2 = document.createElement('h2');
head.innerText = 'Jai shree ram';
head2.innerText = 'Har har Mahadev';


Array.prototype.partition = function()
{
    
}
Array.prototype.quickSort = function()
{

}
Array.prototype.sort = function()
{
    for(let i=0;i<this.length;i++)
    {
        let num = this[i];
        let j = i - 1;
        while(j>=0&&num<this[j])
        {
            this[j + 1] = this[j];
            j--;
        }
        this[j + 1] = num;
    }    
}

let arr = [1,12,33,2014,1265];
arr.sort();
console.log(arr);

// let b = arr.toString();



sec.appendChild(head);
sec.appendChild(head2);

