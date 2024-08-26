"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// app.ts
var classes_1 = require("./classes");
// Instantiation of Products
var costume1 = new classes_1.Prodotto("costume da bagno", 1, "M", "blu");
var costume2 = new classes_1.Prodotto("costume da bagno", 2, "L", "rosso");
var pareo1 = new classes_1.Prodotto("pareo", 3, "L", "verde");
var cappello1 = new classes_1.Prodotto("cappello", 4, "Unica", "nero");
// Instantiation of Clients
var cliente1 = new classes_1.Cliente("Giulia", "Bianchi", "giulia.bianchi@example.com", "carta di credito");
var cliente2 = new classes_1.Cliente("Marco", "Rossi", "marco.rossi@example.com", "PayPal");
// Instantiation of a Production Processe
var processoEco = new classes_1.ProcessoProduzione("Produzione Eco", "Produzione sostenibile con materiali riciclati");
// Adding Products to the Production Process
processoEco.aggiungiProdotto(costume1);
processoEco.aggiungiProdotto(pareo1);
processoEco.aggiungiProdotto(cappello1);
// Allocation of Products to Customers
costume1.assegnaCliente(cliente1); // Giulia orders the costume1
pareo1.assegnaCliente(cliente2); // Marco orders the pareo1
cappello1.assegnaCliente(cliente1); // Giulia also orders the chapel1
// Viewing of Customer Orders
cliente1.visualizzaOrdini();
cliente2.visualizzaOrdini();
// Display of products currently in production
processoEco.visualizzaProdottiInProduzione();
// Attempt to order a product that is already sold out
costume1.assegnaCliente(cliente2); // Marco tries to order costumes, but is already sold out
