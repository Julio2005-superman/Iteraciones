for (let i=1; i<=5; i++) {
    console.log('i=>${i}');
}
for (let i=2; i<=10; i+=2){
    console.log('i=>${i}');
}
for (let i=5; i<=1; i--){
    console.log('i=>${i}');
}
//Iteación con While
let j=1;
while(j<=5){
    console.log('j=${j++}');
}
j=10;
while(j>=0){
    console.log('j=${j}');
    j-=2;
}
//Iteración con do-while
j=1;
do{
    console.log('j:${j}');
}while(j++<=5);