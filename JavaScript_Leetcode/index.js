function sum(arr)
{
    let s = 0;
    for(let i in arr)
    {
        s = s + i;
    }
    return s;
}

console.log(sum([1,2,3,4,5]));

// console.log(sum.apply([1,2,3,4]));


// let arr = [10,41,6,80,99,12,34,23];
// console.log(arr.sort());