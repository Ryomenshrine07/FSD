//==========================================================================================================
//==========================================================================================================

// [Map]

// const salary = [100,200,300,400,500];
// double(salary);
// const output = salary.map(double);


// function double(salary)
// {
//     return salary*2;
// }

// console.log(output);


// const salary = [100,200,300,400,500];
// const output = salary.map((item)=> item * 4);
// console.log(output);

//==========================================================================================================
//==========================================================================================================

// [Filter]

// const arr = [2,4,7,1,9,3];

// const output = arr.filter(isEven); // Get Event Elements

// function isEven(x)
// {
//     return x % 2 == 0; 
// }

// console.log(output);

// const arr = [2,4,7,1,9,3];

// const output = arr.filter((item)=> item % 2 != 0); // Get Odd Elements

// console.log(output);

//==========================================================================================================
//==========================================================================================================

// [Reduce]

// const arr = [2,4,7,1,9,3];

// // const output = arr.filter((item)=> item % 2 != 0); // Get Odd Elements
// let sum = getSum(arr);
// function getSum(arr)
// {
//     let sum = 0;
//     for(let i in arr)
//     {
//         sum = sum + arr[i];
//     }   
//     return sum;
// }

// console.log(sum);

// Here reduce function has two parameters... accumulator and current;

// Accumulator indicates the final output you want to get by using reduce funtion

// Current represents the current elements in array

// const arr = [2,4,7,1,9,3];

// const output = arr.reduce((acc,curr)=>{
//     acc = acc + curr;
//     return acc;
// },0)

// console.log(output);

// Find Largest in array

// const arr = [2,4,7,1,9,3];

// function findMax(arr)
// {
//     let larg = 0;
//     for(let i in arr)
//     {
//         if(arr[i] > larg)
//         {
//             larg = arr[i];
//         }
//     }
//     return larg;
// }

// let maxValue = findMax(arr);

// console.log(maxValue);

// const arr = [2,4,7,1,9,3];
// const maxValue = arr.reduce((max,curr)=>{
//     if(curr > max)
//     {
//         max = curr;
//     }
//     return max;
// },0);

// console.log(maxValue);
