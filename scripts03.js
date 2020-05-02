let answer = prompt(`¿Cual es la capital del Peru?`).toUpperCase().trim()

let message = answer === `LIMA` 
                        ? `Correcto`    
                        : `Mal`
alert(message)