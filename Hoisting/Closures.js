

// function parent()
// {
//     let b = 1;
//     function callKarkeToDekho()
//     {
//         console.log(`Kya baat call kar liye aap`);
//     }
//     function child()
//     {
//         return b;
//     }
//     return child; // Returning the whole body of the child function
// }

// let someFuntion = parent();
// console.log(`Outside = ${someFuntion()}`); // console


function calculator()
{
    let a = 10;
    let b = 20;
    function add()
    {
        return a+b;
    }
    function sub()
    {
        return a-b;
    }
    function mul()
    {
        return a*b;
    }
    function div()
    {
        return a/b;
    }
    return {
        add,
        sub,
        mul,
        div
    }
}

let cal = calculator();
console.log(cal.add());
console.log(cal.sub());

// console.log(calculator(12,34).add());