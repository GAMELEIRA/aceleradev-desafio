// const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'x'];

const alfabeto = 'abcdefghijklmnopqrstuvwxyz';

const descriptografarFrase = (frase, numeroCasas) => {

    let letra;

    let fraseFormatada = "";

    for (let i = 0; i < frase.length; i++) {

        letra = frase.charAt(i);

        if (alfabeto.indexOf(letra) >= 0) {

            let indice = alfabeto.indexOf(letra);

            if (indice - numeroCasas < 0) {

                let resto = indice - numeroCasas + 25;

                fraseFormatada += alfabeto[resto + 1];

            } else {

                fraseFormatada += alfabeto[indice - numeroCasas];

            }

        } else {

            fraseFormatada += letra;

        }
    }

    return fraseFormatada;

}

console.log(descriptografarFrase("dpnqvufst nblf wfsz gbtu, wfsz bddvsbuf njtublft. volopxo", 1));