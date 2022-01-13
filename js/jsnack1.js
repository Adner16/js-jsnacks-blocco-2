console.log('js ok');

let num = 0;
let sum = 0;

for (let i = 0; i < 5; i++){
    num = parseInt(prompt = ('inserisci un numero'));
    sum += num;
    console.log(sum);
}

while(num < sum){
    num = parseInt(prompt = ('inserisci un numero'));
    num += sum;
}
console.log(sum);


do {
    num = parseInt(prompt = ('inserisci un numero'));
    num += sum;    
} while (num < sum);