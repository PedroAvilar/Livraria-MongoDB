//Referência à biblioteca mongoose.
const banco = require('mongoose');

//Opções de conexão.
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

//Conexão com o MongoDB.
banco.connect("mongodb://127.0.0.1:27017/livraria", options)
    .then(() => {console.log("Conectado ao MongoDB!");
    })
    .catch((error) => {console.log(error);
    })

module.exports = banco;