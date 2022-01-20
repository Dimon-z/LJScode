"use strict"
/* let styles = ["jazz","blues"];
styles.push ("rockAndRoll");
let x = styles.length.toFixed(0);
alert(x);
let massiveMiddle=Math.floor(x/2);
alert(massiveMiddle);
styles[massiveMiddle]="classic";
alert(styles);
alert(styles.shift());
styles.unshift("rap","reggae");
alert(styles);
 */
let array = [ ] ;
let x;
let sum=0;
let i=0;
function sumInput() {
    do {
        x = prompt("enter numbers",0);
        if (x===""||x===null) {
            return null;
        }
        if (isFinite(x)===true) { array[i]= +x, sum = +x+sum
        }
        i++;
    }
    while(isFinite(x)===true);
    return sum;
}
sumInput();
alert(sum);