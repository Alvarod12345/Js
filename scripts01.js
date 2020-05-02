let agnosCEO = 21
let agnosEmp = 1

let nombreCEO = `Alvaro 
tiene ${agnosCEO} años`
let nombreEmpresa =`WORS 
tiene ${agnosEmp} año`


// console.log(typeof agnosCEO)
// console.log(typeof nombreEmpresa)

let div1 = `
    <div class = "Container">
    ${nombreCEO}
    </div>
`

let div2 = `
    <div class = "Container">
    ${nombreEmpresa}
`
document.body.innerHTML = div1   
/* document.body.innerText = div2*/