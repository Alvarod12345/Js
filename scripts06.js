// for(let i = 0; i<100 ; i++){
//     if(i % 7 === 0)
//     console.log(i)
// }

// for(let i =100;i>0;i--){
//     if(i%3 === 0) continue /* continue muestra los numeros del 1 la 100 menos los multiplos de 3*/
//     console.log(i)
// }

let n = 0 
for(let i = 0 ; i<=100 ; i++){
   
    if(i%2===0){
        console.log(i)
        n++
    }
    
    if(n>=9) break /*con break salgo del ciclo en este caso corta en el 9 osea muestra 9 veces el codigo
}
