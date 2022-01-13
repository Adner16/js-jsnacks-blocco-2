
const numList = parseInt([1,2,1,4,1,6,1,8,1,10]);
let sum = 0; 

for ( i = 0; i < numList.length; i++){
    if (!(numList[i] %2)) {
        sum += numList[i];
    }
}
console.log(sum);
