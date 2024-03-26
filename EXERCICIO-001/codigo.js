let numeros = [23, 33, 96, 21, 3, 6]
let par = []


for( i=0; i< numeros.length ; i++){
    if(numeros[i]%2 == 0){
        // se o numero for par, adicionamos de pares
        par.push(numeros[i])
    }
}
alert( par )
