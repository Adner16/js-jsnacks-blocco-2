console.log('js ok');

// ciclo FOR

let sum = 0;

for (let i = 0; i < 5; i++){
    const num = parseInt(prompt('inserisci un numero'));
    sum += num;
    console.log(num); 
}
console.log(sum);


// ciclo WHILE
let i = 0;
let sum = 0;

while(i < 5){
    const num = parseInt(prompt('inserisci un numero'));
    sum += num;
    i++;
    console.log(num);
}
console.log(sum);

// ciclio DO WHILE

let i = 0;
let sum = 0;

do {
    const num = parseInt(prompt('inserisci un numero'));
    console.log(num);
    sum += num; 
    i++;
} while (i < 5);

console.log(sum);