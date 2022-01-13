console.log('js ok');

let listOne = [1,2,3,4,5];
let listTwo = [1,2,3];

if(listOne.length < listTwo.length){
   const randomItem = Math.floor(Math.random() * 5 + 1);
    parseInt(listOne) += randomItem;
    console.log(listOne)
} else {
    const randomItem = Math.floor(Math.random() * 5 + 1);
    listTwo += parseInt(randomItem);
    console.log(listTwo);
}
