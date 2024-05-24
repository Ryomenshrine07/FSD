// 'use strict'; [has to be on the top of the javascript file]

// let hasDriverLicense = false;
// const PassTest = true;

// if(PassTest)
// {
//     hasDriverLicense = true;
// }

//---->>>>>>> [Funtions -->]

// function logger()
// {
//     console.log("Function Called");
//     return 30;
// }
// let result = logger();
// console.log(result);


// function fruit_Proccessor(apples,orange)
// {
//     console.log(`apples are ${apples}`);
//     console.log(`orange are ${orange}`);
//     const juice = `Juice with ${apples} apples and ${orange} oranges`
//     return juice;
// }
// let result = fruit_Proccessor(2,5);
// console.log(fruit_Proccessor(2,5));

// const mix_juice = fruit_Proccessor(2,6);
// console.log(mix_juice);

// [Function Declaration Vs Expression] ----->>>>

// function calculate_age1(birth_year)
// {
//     return 2024 - birth_year;
// }
//  const age = calculate_age1(2003);
//  console.log(age);


// // const calculate_age2
// const calculate_age2 = function (birth_year)  //Funtion as a expression
// {
//     return 2024 - birth_year;
// }

// const age2 = calculate_age2(2003);
// console.log(calculate_age2(2003)); 


// [Arrow Funtions -->>>]
// These are also known as call back function

// [ Syntax : variable name = (Parameters) => Expression {} ]

// const calAge = (BirthYear) => 2024 - BirthYear; 

// console.log(calAge(2003));

// const retirement = (Birthyear,firstName) => 
// {
//     const age = 2024 - Birthyear;
//     const retirement = 62 - age;
//     return ` ${firstName} retires in ${retirement}`;
// }

// const result = retirement(2002 , `Vinayak`);
// console.log(result);

// alert(retirement(2002 , `Vinayak`)); // [This is also known as higher order Function]

// [When you pass a callBack Function in a funtion parenthesis then it is  called as High order Funtion]


// const cutPieces = function(fruit)
// {
//     return fruit*4;
// }

// function fruit_Proccessor(apples,orange)
// {

//     const applePieces = cutPieces(apples);
//     const orangePieces = cutPieces(orange);
//     console.log(`apples are ${apples}`);
//     console.log(`orange are ${orange}`);
//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//     return juice;
// }

// const mix_juice = fruit_Proccessor(2,2);
// console.log(mix_juice);


// let TotalScoreOfDolphin = 85 + 54 + 49;
// let TotalScoreOfKoalas = 23 + 34 + 27;

// const Avg = (TotalScore) =>
// {
//     let avg = TotalScore / 3;
//     return avg;
// }

// const DolphinAverage = Avg(TotalScoreOfDolphin);
// const KoalasAverage = Avg(TotalScoreOfKoalas);

// const checkWinner = (DolphinAverage , KoalasAverage) =>
// {
//     if(DolphinAverage >= KoalasAverage * 2)
//     {
//         console.log(`Dolphins Wins with score ${TotalScoreOfDolphin} vs ${TotalScoreOfKoalas}`);
//     }
//     else if(KoalasAverage >= DolphinAverage * 2)
//     {
//         console.log(`Koalas win Wins with score ${TotalScoreOfKoalas} vs ${TotalScoreOfDolphin}`);
//     }
//     else
//     {
//         console.log(`It was Draw With Score ${DolphinAverage} vs ${KoalasAverage}`);
//     }
// }
// checkWinner(DolphinAverage , KoalasAverage);


// const friends =['Vinayak','Priyanka','Manjari'];
// const friends2 = ['Bool','hello','mello'];
// friends.push('Helllo');
// console.log(friends,friends2);


// console.log(friends.length);

// friends[2] = 'PriAndVinayakchild';

// console.log(friends);

// friends.fill('Vinayak');

// console.log(friends);

// let friends = ["heelo","Mello"]
// let friends2 = ["Shello","Kello"]

// console.log(friends.concat(friends2));


// const age = (BirthYear,CurrenAge) =>
// {
//     console.log(`Age is ${CurrenAge.push(2024 - BirthYear[0])}`);
//     console.log(`Age is ${CurrenAge.push(2024 - BirthYear[1])}`);
//     console.log(`Age is ${CurrenAge.push(2024 - BirthYear[2])}`);
//     console.log(`Age is ${CurrenAge.push(2024 - BirthYear[3])}`);
//     // CurrenAge.push((2024 - BirthYear[0]),(2024 - BirthYear[1]),(2024 - BirthYear[2]));

// }
// const CurrenAge = [];
// let BirthYear = [1975,2003,2004,2005];
// age(BirthYear,CurrenAge);
// console.log(CurrenAge);
// console.log(CurrenAge.push());

// CurrenAge.unshift("Vinayak"); //Push element to the Start of the array
// console.log(CurrenAge);

// CurrenAge.pop(); //Pops out element from the end of the array
// console.log(CurrenAge);

// CurrenAge.pop();
// console.log(CurrenAge);

// CurrenAge.shift(); //Pops element out From the begenning of the array
// console.log(CurrenAge);

// console.log(CurrenAge.indexOf(49)); //Gives the index element of first occurence

// console.log(CurrenAge.includes(21)); //Checks wether the element is present in the array or not(true or false)

// let tip = [125,555,44];

// const calcTip = (tip) =>
// {
//     return (tip>=50&&tip<=300)?((tip*0.15)+tip):((tip*0.20)+tip);
// }

// let totalBill = calcTip(tip[0]);
// let totalBill2 = calcTip(tip[1]);
// let totalBill3 = calcTip(tip[2]);

// let BillArray = [];
// BillArray.push(totalBill,totalBill2,totalBill3);
// console.log(BillArray);

// ----->>>>>>[OBJECTS]

// ----->>>>>>>[Syntax]

// const Object name = 
// {
//     key : value,
//     key : value,
//     key : value,
//     key : value,
//     key : value
// };

// const person =
// {
//     firstName : "Vinayak",
//     lastName : "Upadhayay",
//     age:2024-2001,
//     job:"Student",
//     salary:22000,
//     anime : ["One Piece","JJK"]
// };

// const arrayOfObject = [person, person, person];

// console.log(arrayOfObject);

// ------------->>>>>>>>>>>>[Dot Vs Bracket]

// console.log(person.firstName);

// console.log(person.age);

// console.log(person.anime[0]);

// console.log(person[`firstName`]);

// console.log(`anime`); // Not Possible

// const nameKey = 'Name';

// console.log(person['first' + nameKey]);

// const UserData =
// {
//     firstName : prompt("Enter Your First name"),
//     lastName : prompt("Enter Your Last name"),
//     age:prompt("Enter Your Age"),
//     job:prompt("Enter Your Proffesion"),
//     salary:prompt("Enter Your Salary"),
// };
 
// let input = prompt(" 1. firstName \n 2. fastName \n 3. age \n 4. job \n 5. salary");

// console.log(person[input]); // Sqaure brackets can hold expression

// if(person[input])
// {
//     console.log(person[input]);
// }
// else
// {
//     console.log("Not Available");
// }

// person.firstName = "Priyanka";

// person.location = 'Jhansi';

// person.Google = 'abc@gmail.com';

// person['Ability'] = "Maloverant Shrine";

// console.log(person);



// console.log(person.firstName);

// Map , Filter , Reduce; [Prepare]

// let input = prompt(" 1. firstName \n 2. fastName \n 3. age \n 4. job \n 5. salary");

// if(person[input] > 10000)
// {
//     console.log((person[input] * 0.10) + person[input]);
// }
// else if(person[input] > 20000)
// {
//     console.log((person[input] * 0.20) + person[input]);
// }
// else
// {
//     console.log((person[input] * 0.30) + person[input]);
// }

// ---------->>>>[More on Objects]

// let city = 
// {
//     // "city Name" :`Jhansi`, [Properties can also be written in this manner if a space is to be given in their name]
//     "City Name" : `Jhansi`,
//     cityName : `Jhansi`,
//     cityState : `Uttar Pradesh`,
//     cityPinCode : `248003`,
//     cityMonument : `Jhansi kila`,
//     displayInfo : () =>
//     {
//         console.log(`City name is ${this.cityName} it is located in ${this.cityState} and it's pincode is ${this.cityPinCode} it's monumental place is ${this.cityMonument}`);
//     },
//     splitPropertyName : (input) =>
//     {
//         console.log(city[input].split(' ')[1]);
//     }
// };

// city.displayInfo();

// city.splitPropertyName(`cityState`);
// console.log(city.cityState);



// delete city.cityState; // Deleted cityState Property
// console.log(city.cityState); // [Output will be undefined for City State in this case]


// console.log(city.cityName);

// let car =
// {
//     carName : prompt("Enter Car Name"),
//     carModel : prompt("Enter Car Model"),
//     serviceCenter : prompt("Enter Service Center Name"),
    
//     displayInfo : (car) =>
//     {
//         console.log(`Car name is ${car.carName} and Model is ${car.carModel}, Service Center is ${car.serviceCenter}`);        
//     }
// }

// car.displayInfo(car);

// console.log(car.carName);

// console.log(car['carName']);


// let Student =
// {
//     studentName:prompt("enter your name"),
//     studentId:prompt("enter your id"),
//     studentBranch:prompt("enter your branch"),
//     displayInfo: function()
//     {
//         console.log(`Student name is ${this.studentName} his id is ${this.studentId} his branch is ${this.studentBranch}` );
//     }

// }

// console.log(Student.displayInfo());

// let Game =
// {
//     GameName: "God OF War",
//     GamePlatform: "PC, PS4 and PS5",
//     GameRealeseDate: "12/12/2018"
// };

// // \
// let key = prompt("Type Attribute");

// if(Game[key] === Game['GameName'])
// {
//     console.log("It has value");
// }
// else
// {
//     console.log("It does not have value");
// }

// for(let i=1;i<=10;i++)
// {
//     if(i % 2 == 0)
//     {
//         console.log(i);
//     }
// }

// for(let i=1;i<=30;i++)
// {
//     if(i % 3 == 0 && i % 5 == 0)
//     {
//         console.log(i);
//     }
// }

// let num = 12345;
// let rev = 0;
// while(num>0)
// {
//     let d = (num % 10);
//     rev = ((rev * 10) + d);
//     num = parseInt(num / 10);
// }
// console.log(rev);



// let input;
// let arr = [];
// do
// {
//     arr.push(Number(prompt("Enter Your Record")));
//     input = prompt("Enter Yes or No");
// }while(input === "Yes");

// let sum = 0;
// for(let i=0 ; i<arr.length; i++)
// {
//     sum = sum + arr[i];
// }

// console.log(`Total is ${sum}`);

// ------>>>>>>>>>>>>[For Of Loop]

// let strVar = [1,2,"Hello",4,5];

// for(let val of strVar)
// {
//     console.log(val);
// }

// let string = "Anda";

// for(let val of string)
// {
//     console.log(val);
// }

// let arr = [1,2,3,4,5,6];
// let sum = 0;

// for(let val of arr)
// {
//     sum = sum + val;
// }
// console.log(sum);


// ------------>>>>>>>>>>[for in Loop] Used to traverse inside Objects


let car = 
{
    carName:"Audi",
    carModel:"R8",
    carPrice:150000,
    carColor:"White",
    carCompany:"Nai bataunga"
};

// for(let val in car)
// {
//     if(typeof car[val] === 'string')
//     {
//         console.log(` ${val} =  ${car[val]}`);
//     }
// }


let val1 = Number(prompt("Enter your number"));
let attempt = 0;
let input = "";
do
{
    input = Number(prompt("Guess the number"));
    attempt++;
    if(input > val1)
    {
        alert("Your Guessed number is Greater than Actual number");
    }
    else if(input < val1)
    {
        alert("Your Guessed number is Lesser than Actual number");
    }
    else if(input === 0)
    {
        alert("Really Nigga");
    }
}while(val1!=input)

console.log(`You took ${attempt} attemps`);





