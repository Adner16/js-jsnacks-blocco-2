
// ciclo FOR


const numList = [1,2,3,4,5,6,7,8,9,10];
let sum = 0; 

for ( i = 0; i < numList.length; i++){
    if (i %2 != 0) {
        sum += numList[i];
    }
}
console.log(sum);


// ciclo WHILE

let i = 0;

while (i < numList.length){
    if (i %2 != 0) {
        sum += numList[i];
    }
    i++;
}
console.log(sum);

// ciclo DO 

let i = 0;

do{
     if (i %2 != 0) {
    sum += numList[i];
}
i++;
} while (i < numList.length);

console.log(sum);