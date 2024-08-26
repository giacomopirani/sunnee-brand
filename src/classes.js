"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessoProduzione = exports.Cliente = exports.Prodotto = void 0;
// Implementation of the Product class
var Prodotto = /** @class */ (function () {
    function Prodotto(tipo, id, taglia, colore) {
        this.tipo = tipo;
        this.id = id;
        this.taglia = taglia;
        this.colore = colore;
        this.stato = "disponibile";
    }
    Prodotto.prototype.assegnaCliente = function (cliente) {
        if (this.stato === "disponibile") {
            cliente.ordinaProdotto(this);
            this.stato = "esaurito";
            console.log("Prodotto ID ".concat(this.id, " (").concat(this.tipo, ") assegnato a ").concat(cliente.nome, " ").concat(cliente.cognome, "."));
        }
        else {
            console.log("Prodotto ID ".concat(this.id, " (").concat(this.tipo, ") non disponibile."));
        }
    };
    return Prodotto;
}());
exports.Prodotto = Prodotto;
// Implementation of the Client class
var Cliente = /** @class */ (function () {
    function Cliente(nome, cognome, email, metodoPagamentoPreferito) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamentoPreferito = metodoPagamentoPreferito;
        this.ordini = [];
    }
    Cliente.prototype.ordinaProdotto = function (prodotto) {
        if (prodotto.stato === "disponibile") {
            this.ordini.push(prodotto);
            console.log("".concat(this.nome, " ").concat(this.cognome, " ha ordinato il prodotto ID ").concat(prodotto.id, " (").concat(prodotto.tipo, ")."));
        }
        else {
            console.log("Il prodotto ID ".concat(prodotto.id, " (").concat(prodotto.tipo, ") non \u00E8 disponibile per l'ordine."));
        }
    };
    Cliente.prototype.visualizzaOrdini = function () {
        if (this.ordini.length > 0) {
            console.log("Ordini di ".concat(this.nome, " ").concat(this.cognome, ":"));
            this.ordini.forEach(function (prodotto) {
                return console.log("- ".concat(prodotto.tipo, " ID ").concat(prodotto.id, " (").concat(prodotto.colore, ", ").concat(prodotto.taglia, ")"));
            });
        }
        else {
            console.log("".concat(this.nome, " ").concat(this.cognome, " non ha effettuato ordini."));
        }
    };
    return Cliente;
}());
exports.Cliente = Cliente;
// Implementation of the ProcessProduction class
var ProcessoProduzione = /** @class */ (function () {
    function ProcessoProduzione(nomeProcesso, descrizione) {
        this.nomeProcesso = nomeProcesso;
        this.descrizione = descrizione;
        this.prodottiInProduzione = [];
    }
    ProcessoProduzione.prototype.aggiungiProdotto = function (prodotto) {
        this.prodottiInProduzione.push(prodotto);
        console.log("Prodotto ID ".concat(prodotto.id, " (").concat(prodotto.tipo, ") aggiunto al processo di produzione ").concat(this.nomeProcesso, "."));
    };
    ProcessoProduzione.prototype.visualizzaProdottiInProduzione = function () {
        if (this.prodottiInProduzione.length > 0) {
            console.log("Prodotti in produzione nel processo \"".concat(this.nomeProcesso, "\":"));
            this.prodottiInProduzione.forEach(function (prodotto) {
                return console.log("- ".concat(prodotto.tipo, " ID ").concat(prodotto.id, " (").concat(prodotto.colore, ", ").concat(prodotto.taglia, ")"));
            });
        }
        else {
            console.log("Nessun prodotto in produzione nel processo \"".concat(this.nomeProcesso, "\"."));
        }
    };
    return ProcessoProduzione;
}());
exports.ProcessoProduzione = ProcessoProduzione;
