const axios = require('axios');

const fs = require('fs');

axios.get("https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=1a02f80ecc9866e57baa0c28c63212bb61900c1e")
    .then((dados) => {

        const cripto = dados.data;

        escreverNoArquivo(cripto);

    });

const escreverNoArquivo = (objeto) => {

    fs.writeFile(__dirname + "/answer.json", JSON.stringify(objeto), (erro) => {

        if (erro) {

            console.log("Não gravou!");

        } else {

            console.log("Objeto JSON gravado com suceso no answer.json");

        }

    });

}