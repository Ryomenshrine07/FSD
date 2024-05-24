//===================================================================================================
//===================================================================================================

//-->>>> [ Asyncronus Funtions ]

// console.log(`Func 1`);
// console.log(`Func 2`); // 3s wait
// console.log(`Func 3`);

// setTimeout(()=>
//         //async
//     {console.log(`Hellu Buddy1`);}, 3000
// );

// console.log(`Stories`);

// setTimeout(()=>
//         //async
//     {console.log(`Hellu Buddy2`);}, 3000
// );

// console.log('body');

// setTimeout(()=>
//         //async
//     {console.log(`Hellu Buddy3`);}, 3000
// );


// setInterval(() => {
//     console.log(`Har Har Mahadev`); // [Set Interval Makes a funtion run on a interval of time and it won't Stop]
// },1000)

// function sum(a,b)
// {
//     console.log(a+b);
// }

// function calculator(a,b,sumCallback)
// {
//     sumCallback(a,b);
// }

// // calculator(1,4,sum);

// calculator(16,2,(a,b)=>{
//     console.log(a+b);
// });

// function getData(dataId)
// {
//     setTimeout(()=>{
//         console.log("data",dataId);
//     },2000);
// }

// getData(1);
// getData(2);
// getData(3);

// function getData(dataId,getNextData)
// {
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData)
//         {
//             getNextData();
//         }
//     },2000);
// }

// getData(1,()=>{
//     console.log(`Getting data 2....`);
//     getData(2,()=>{
//         console.log(`Getting data 3....`);
//         getData(3,()=>{
//             console.log(`Getting data 4....`);
//             getData(4);
//         });
//     });
// });

//===================================================================================================
//===================================================================================================

// [Promise is an Object]

// let promise = new Promise((resolve,reject)=>{
//     console.log(`I am a Promise`);
//     resolve("Let's Goo!!");
// })
 // [Three States of promises are fullfilled, rejected and pending]
// function getData(dataId,getNextData)
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success");
//             if(getNextData)
//             {
//                 getNextData();
//             }
//         },3000);
//     })
// }


// let result = getData(1);

// const getPromis = () =>
// {
//     return new Promise((resolve,reject)=>{
//         console.log(`I Am a promise`);
//         // resolve("anda moti");
//         reject("Nope");
//     })
// }

// let result = getPromis();
//     result.then((res)=>{
//         console.log(`anda moti resolved`,res);
//     })

// result.catch((res)=>{
//     console.log(`Cash back`,res);
// })

//===================================================================================================
//===================================================================================================

// [Promise Chaining]

// function asyncFuntion()
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(`some data 1`);
//             resolve("succes");
//         },3000)
//     })
// }

// function asyncFuntion2()
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(`some data 2`);
//             resolve("success");
//         },3000)
//     })
// }


// console.log("Fetching data 1");

// let p1 = asyncFuntion();
// p1.then((res)=>{
//     console.log(`Fetching data 2`);
//     let p2 = asyncFuntion2();    
// })

// p1.catch((res)=>{
//     console.log(res);
// })

// asyncFuntion().then((res)=>{
//     console.log(`Fetching data 2`);
//     asyncFuntion2().then((res)=>{
//         console.log(res);
//     });
// });

// let p1 = asyncFuntion();

// p1.then((res)=>{
//     console.log(res);
// })

// let p2 = asyncFuntion2();

// p2.then((res)=>{
//     console.log(res);
// })


// getData(2);
// getData(3);
// let count = 1;
// for(let i=1;i<5;i++)
// {
//     getData(i).then((res)=>{
//         console.log(`Getting data ${++count}`);
//     })
// }

//===================================================================================================
//===================================================================================================

//-->>>>>   [Syntax of CallBAck Functions]

// function getData(dataId,getNextData)
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success");
//             if(getNextData)
//             {
//                 getNextData();
//             }
//         },3000);
//     })
// }
// console.log(`Getting data 1....`);
// getData(1).then((res)=>{
//     console.log(`Getting data 2....`);
//     getData(2).then((res)=>{
//         console.log(`Getting data 3....`);
//         getData(3).then((res)=>{

//         })
//     })
// })

// .catch((err)=>{
//     console.log(err);
// })

// function getData(data,CallBAck)
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(data);
//             resolve("Success");
//             if(CallBAck)
//             {
//                 CallBAck();
//             }
//         },3000)
//     })
// }

// getData(1).then((res)=>{
//     console.log(`Getting Data 2....`);
//     getData(2).then((res)=>{
//         console.log(`Getting Data 3....`);
//         getData(3);
//     })
// })

// .catch((err)=>{
//     console.log(err);
// })

///==================================================================================================
//===================================================================================================

//  [ Use of async Keyword ]

// async function apiOfJhansi()
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(`Weather Data of Jhansi`);
//             resolve("Hell YEahh!!!!");
//         },7000);
//     })
// }
// async function apiOfBhopal()
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(`Weather Data of Bhopal`);
//             resolve("Hell YEahh!!!!");
//         },7000);
//     })
// }

// await api(); this is syntax error yoou need to pass await in async funtion itself

// [correct syntax is await funtionName();]

// await blocks the thread so the funtions written after async funtion will get executed,
// after awaited funtion is completely executed..

// async function getWeatherData()
// {
//     // let jhansi = await apiOfJhansi();
//     // console.log(jhansi);
//     // let bhopal = await apiOfBhopal();
//     // console.log(bhopal );
// }
// getWeatherData();

// function getData(dataId)
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success");
//         },3000);
//     })
// }

// async function getAllData()
// {
//     await getData(1);
//     await getData(2);
//     await getData(3);
//     await getData(4);
//     await getData(5);
// }
// getAllData();


// async function getdata(data)
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(`Data is : ${data}`);
//             resolve("Success");
//         },3000)
//     })
// }

// async function getAllData()
// {
//     await getdata(1);
//     await getdata(2);
//     await getdata(3);
//     await getdata(4);
// }

// getAllData();




