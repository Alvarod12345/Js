// let i = 0
// while(i<=10){
// console.log(i)
// i++}

let password = 'EDteam'
let pass
do{
    pass = prompt('Ingrese la contraseña: ')
} while(pass !== password){
    alert('Acceso Concedido!')
}