    var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function calcularMedia(numeros) {
        var soma = 0;

        for (var i = 0; i < numeros.length; i++) {
            soma += numeros[i];
        }

        return soma / numeros.length;
    }

    alert(calcularMedia(numeros));