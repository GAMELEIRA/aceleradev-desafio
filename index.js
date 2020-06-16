const express = require('express');

const axios = require('axios');

const cors = require('cors');

axios.get("https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=1a02f80ecc9866e57baa0c28c63212bb61900c1e");

const app = express();

app.use(cors());

app.use(express.json());

app.listen(3333, (error) => {

    if (error) {

        console.log("Servidor encontrou um problema para ser iniciado!");

    } else {

        console.log("Servidor startado!");

    }

})