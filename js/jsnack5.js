console.log('js ok');

let listOne = [1,2,3,4,5];
let listTwo = [1,2,3];


if(listOne.length < listTwo.length){
    for ( i = 0; i < listOne.length; i++){
   const randomItem = Math.floor(Math.random() * 5 + 1);
    listOne.push(randomItem);
    console.table(listOne);
    }
} else {
    for ( i = 0 ; i < listTwo.length; i++){
    const randomItem = Math.floor(Math.random() * 5 + 1);
    listTwo.push (randomItem);
    console.table(listTwo);
    }
}
