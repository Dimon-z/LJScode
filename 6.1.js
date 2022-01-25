"use strict"

function sumTo1(n){
    let sum=0;
        for (let i = 0; i < n+1; i++) {
            sum = sum + i;
        }
    return sum;
}
console.log(sumTo1(4));

function sumTo2(n){
    if (n<2) {
        return n;
    } else {
       return n=n+sumTo2(n-1);
    }
}

console.log(sumTo2(4));

function sumTo3(n){
    let sum=(1+n)/2*n
    return sum;
}

console.log(sumTo3(4));


