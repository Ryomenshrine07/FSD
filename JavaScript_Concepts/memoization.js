// Memoization is a technique in which we try to reduce the function calls and time comsuming
// calculations by saving the results of previous calcualtions in a place called cache and return
// already calculated results from it.



let sum = 0;
const calc = (n) =>{
    for(let i=0;i<=n;i++)
    {
        sum+=i;
    }
    return sum;
}
console.log(calc(5));



