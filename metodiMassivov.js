"use strict"

/* zadacha1 */

function moveToStart(array,n){
    let length = array.length;
        if(n<array.length){
          return array.slice(-n).concat(array.slice(0,-n));
        }  //concat
          return array.slice(0,length);
}

let arr=[1,2,3,4,5,6,7,8,];

/* zadacha 1 end */


/* zadacha 2 */

function hasArrays(array){
    return array.some(Array.isArray)
}

/* zadacha 2 end */

/* zadacha 3 */

function getNumbersByParity(array,str){
    switch(str){

        case "even":
        return array.filter(value=>value%2===0);
        break;
        case "odd":
        return array.filter(value=>value%2===1);
    }

}   

/* zadacha 3 end */

/* zadacha 4 */
function sequenceSum(start,end){
    if (start>end) {
        return NaN
    }

    else {
        if (start===end) {
            return end;
        } else {
            return start+sequenceSum(start+1,end);
        }

    }

}
/* zadacha 4 end */

/* zadacha 5 */
let obj = {
    piton:"1",
    guf:"3",
    rip:4,
    2:[1,2,"string"],
}


function getStringCount(obj){
        if (typeof(obj)=="string") {
            return 1;
        }

        if (!obj){
            return 0;
        }
        
        return Object.values(obj).reduce((accum,current)=>accum+getStringCount(current),0)
}





/* zadacha 5 end */