const url ="https://cat-fact.herokuapp.com/facts";

async function getfacts()
{
    console.log(`Getting data........`);
    let response = await fetch(url); // jabtak data na aye tab tak baki sab wait karenge [Returns Promise]
    console.log(response);
    let data = await response.json();
    console.log(data[0].text);
    para.innerText = data[2].text;
}
// getfacts();
// console.log(`body`);
let button = document.querySelector('#btn');
let para = document.querySelector('#facts');

button.addEventListener('click', getfacts);