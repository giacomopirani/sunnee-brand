// app.ts
import { Cliente, ProcessoProduzione, Prodotto } from "./classes";

// Instantiation of Products
const costume1 = new Prodotto("costume da bagno", 1, "M", "blu");
const costume2 = new Prodotto("costume da bagno", 2, "L", "rosso");
const pareo1 = new Prodotto("pareo", 3, "L", "verde");
const cappello1 = new Prodotto("cappello", 4, "Unica", "nero");

// Instantiation of Clients
const cliente1 = new Cliente(
  "Giulia",
  "Bianchi",
  "giulia.bianchi@example.com",
  "carta di credito"
);
const cliente2 = new Cliente(
  "Marco",
  "Rossi",
  "marco.rossi@example.com",
  "PayPal"
);

// Instantiation of a Production Processe
const processoEco = new ProcessoProduzione(
  "Produzione Eco",
  "Produzione sostenibile con materiali riciclati"
);

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
