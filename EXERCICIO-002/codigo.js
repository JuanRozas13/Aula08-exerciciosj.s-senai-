let palavras = ["juan", "caique", "josé", "mariane"]

let palavras_masi5 = []

for (i = 0 ; i < palavras.length; i++){
    if(palavras[i].length>5){
        palavras_masi5.push(palavras[i])
    }
}

alert(palavras_masi5)