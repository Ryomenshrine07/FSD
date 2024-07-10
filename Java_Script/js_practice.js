console.log("Welcome to fsd")
//console.log(object); 

// let Name1 = "Vinayak";
// console.log(Name1);

// let age = 21;
// console.log(age);

// let fistName = "Vinayak";
// let lastName = "Upadhyay";

// console.log(fistName +" "+lastName);
// console.log(lastName);

let PI = 3.14; //if we use uppercase letter means we will not change value of PI

// let job1 = "Developer";
// let job2 = "Teacher";

// let profile_of_first_job1 = "Developer";
// let profile_of_first_job2 = "Teacher";

// Data types -> int , decimal
// String
// bool

let college1 = "Oriental";
let college2 = 'Oriental'; //String here also works with single quouts but it is not Good Prctice

// undefined
// null

// let Name1 = "Vinayak";
// console.log(typeof Name1);
// console.log(typeof 23.90);
// console.log(typeof true);
// console.log(typeof 100);
// console.log(typeof "Priyanka");
// console.log(typeof 'C');

// console.log(typeof(Name1));


// let javaScriptIsFun = 'Yes!';
// console.log(typeof javaScriptIsFun);

// using funtions ->

// function dosomthing()
// {
//     return 55;
// }

// let result = dosomthing();
// console.log(result);

// usage of null->

// result = null;
// console.log(result);


// function nonExistingFun(b)
// {
//     console.log(b);
//     b = null;
//     return null;
// }

// let b = 55;
// let a = nonExistingFun(b);
// console.log(a);
// console.log(b);


// Usage of class -->

// class Vinayak
// {
//     constructor(FirstValue,SecondValue)
//     {
//         this.a = FirstValue;
//         this.b = SecondValue;
//     }
//     add()
//     {
//         this.c = this.a + this.b;
//     }
//      display()  
//     {
//         console.log(this.c);
//     }
// }
//         let result = new Vinayak(10,20);
//         result.add();
//         result.display();

// console.log(typeof null); this is a bug in javaScript



//Use of Let and Const-->[Block level or Funtion level Declaration]
// [var is Global level]

// with [let].... you can declare a variable once and change it's value throughout the program

// var age = 50;
// console.log("Age is "+age);
// var age = 20;
// console.log("Age is "+age);

// const Birth = 2004;
// let current = 2024;
// let age = current - Birth;
// console.log(age);

// # Operators-->

// let age = 20 - 1;
// console.log(age);

// let experience = 2;
// age = 24 + experience;
// console.log(age);

// let age = 24;
// console.log(age*2,age/2); Here copies of age are getting passed

// Exponentioal operators -->
// [**] This is a exponential operator basically [a^b]
// console.log(5 ** 2);

// const fistName = "Priyanka";
// const lastName = "Upadhyay";
// console.log(fistName+" "+lastName);

// [ Compound of assignment operators ] -->
// age+=10;
// age-=10;
// age*=10;
// age/=10;
// age%=10;

//[ Increment Operator and Decrement operator ]
// let age = 50;
// age++;
// console.log(age++);

// const ajay = 20;
// const anu = 30;
// console.log(ajay>anu); by default it will return boolean


// [Task  Caomparision ke sath how math works]

// let birthyear;
// const currentyear = 2024;
// console.log(currentyear-2000 > currentyear - 1990);

// let birthyear;
//  let currentyear = 2024;
//  console.log(currentyear+=30 > (currentyear-=25));


// const Mark_hieght = 1.69;
// const John_hieght = 1.88;
// const Mark_weight = 78;
// const Jhon_weight = 92;
// let Mark_bmi = Mark_weight / (Mark_hieght ** Mark_hieght);
// let Jhon_bmi = Jhon_weight / (John_hieght ** John_hieght);
// console.log("Mark's bmi "+Mark_bmi);
// console.log("Jhon's bmi "+Jhon_bmi);
// let higher_Bmi = Mark_bmi > Jhon_bmi;
// console.log(higher_Bmi); 

// [string with templates]
// const Name = "Vinayak";
// const job = "Software Developer";
// const birth_year = 2003;
// const current_year = 2024;

// const information = "I am " + Name + " a " + job + " With age of " + (current_year - birth_year) + " Years old";
// console.log(information);   
// whenever we try to concatinate a string with a number it will automatically convert that number to string
// it is known as type coversion
// [use of baptics --> ``(Template literal) spaces and new lines are also read under baptics]
// const new_info = `I am ${Name} a ${job} With age of ${current_year - birth_year
// }`;
// console.log(new_info);

// [Conditional Statements]-->>

// const age = 17;
// if(age>=18)
// {
//     console.log("He is Applicable");
// }
// else
// {
//     console.log("He is not applicable");
//     // console.log("He will be eligible after " +(18-age)+ " years");
//     console.log(`you have to wait ${18-age} years`);
// }

// const Mark_hieght = 1.69;
// const John_hieght = 1.88;
// const Mark_weight = 78;
// const Jhon_weight = 92;
// let Mark_bmi = Mark_weight / (Mark_hieght ** Mark_hieght);
// let Jhon_bmi = Jhon_weight / (John_hieght ** John_hieght);
// console.log("Mark's bmi "+Mark_bmi);
// console.log("Jhon's bmi "+Jhon_bmi);
// if(Mark_bmi>Jhon_bmi)
// {
//     console.log(`Mark Bmi is Higher and is ${Mark_bmi}`);
//     console.log(`Mark bmi is ${Mark_bmi-Jhon_bmi} higher than Jhon`);
//     // alert("Priyanka is ting i")
// }
// else
// {
//     console.log(`Jhon Bmi is Higher and is ${Jhon_bmi}`);
//     console.log(`Jhon bmi is ${Jhon_bmi_bmi-Mark_bmi_bmi} higher than Mark`);
// }
// when compiler convertes the following code by itself thr it is called type coersoin
// [Type Conversion (Manually)] 
// const input_year ='1990';
// console.log(input_year+22);

// console.log(Number(input_year)+18);
// console.log(typeof NaN);

// console.log('I am '+ 2 +' Years of experience');

// console.log(23 + 10 + 2 + '2');
 
// let n = '1' + 1;
// console.log(n);

// n = n - 1;
// console.log(n);

// const age;
// if(age)
// {
//     console.log("true");
// }
// else
// {
//     console.log("false");
// }
// let variable=1;
// console.log(Boolean(variable));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// console.log(Boolean([]));

// const money = 0;
// const money2 = '10';
// if(money && money2)
// {
//     console.log("your can shop");
// }
// else
// {
//     console.log("uDhar lele");
// }

// [== VS ===]--->

// const age = Number('18');
// if(typeof age == String)
// {
//     console.log("you are big");
// }
// else
// {
//     console.log("baccha hai re");
// }

// [== is a losely strict comparision]
// [=== is a Strict type comparision]

// alert("HElll yeahhh") ;
// let age = prompt("Enter your age");
// console.log(age);

// let age = Number(prompt("Enter your age"));
// if(age === 18)
// {
//     console.log("bhai gf bana le");
// }
// else if(age === 23)
// {
//     console.log("bhai shaadi karle");
// }
// else
// {
//     console.log("Rehne de bhai");
// }

// [Boolean operators && || !=]

// const hasDriverlicense = true;
// const hasGoodVision = false;


// console.log(hasDriverlicense &&  hasGoodVision);
// console.log(hasDriverlicense || hasGoodVision);
// console.log(hasDriverlicense != hasGoodVision);
// console.log(!hasDriverlicense);

// if(hasDriverlicense &&  hasGoodVision)
// {
//     console.log("BHindi");
// }
// else if(hasDriverlicense || hasGoodVision)
// {
//     console.log("allo");
// }
// else
// {
//     console.log("gobi");
// }

// [Switch Statements]

// let day = prompt("Enter day");
// switch(day)
// {
//     case 'monday':
//         console.log("Back and triceps");
//         break;
//         case 'tuesday':
//             console.log("Chest and bicesps");
//             break;
//             case 'wednesday':
//                 console.log("abbs and upper");
//                 break;
//                 case 'thursday':
//                     case 'friday':
//                         console.log("Full body workout");
//                         break;
//                         case 'saturday':
//                             console.log("Legs day");
//                             break;
//                             case 'sunday':
//                                 console.log("Rest karle bhai");
//                                 break;
//                                 default :
//                                 console.log("rehne de bhai");
//                                 break; 
// }\

// let dolphi_total = 100 + 100 + 90;
// let dolph_bonus;
// let Koalas_total = 100 + 100 + 90;
// let Doplh_avg = dolphi_total / 3;
// let Koalas_avg = Koalas_total / 3;
// let Minimum_score = 100;

// if(dolphi_total >= Minimum_score || Koalas_total >= Minimum_score)
// {
//     if(dolphi_total > Koalas_total)
//     {
//         console.log(`Dolphins wins is avg of : ${Doplh_avg}`);
//         console.log(`With the Total Score of : ${dolphi_total}`);
//     }
//     else if(dolphi_total === Koalas_total)
//     {
//         console.log(`Its a draw`);
//         console.log(`Dolhins Scored : ${dolphi_total}`);
//         console.log(`Koalas Scored : ${Koalas_total}`);
//     }
//     else
//     {
//         console.log(`Koalas wins is avg of : ${Koalas_avg}`);
//         console.log(`With the Total Score of : ${Koalas_total}`);
//     }
// }
// else
// {
//     console.log(`No one Wins Both teams scored below Minmum Score`);
// }

// [Expression VS Statements] :

// Anything that return an value is called an expression
// Statements are the ones which are written to do some task

// [Ternary Operator]-->
// let age = 18;
// console.log(age>18?console.log("You are eligible"):console.log("You are not eligible"));

// let age = 18;
// const drink = age>=18?true:false;
// console.log(drink);

// console.log(`I like to drink ${age>=18?`wine`:`water`}`);