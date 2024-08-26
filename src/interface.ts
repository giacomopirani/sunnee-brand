// interface.ts

// Interface for the products
export interface IProdotto {
  tipo: "costume da bagno" | "pareo" | "cappello";
  id: number;
  taglia: string;
  colore: string;
  stato: "disponibile" | "esaurito";

  assegnaCliente(cliente: ICliente): void;
}

// Interface for the customer
export interface ICliente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamentoPreferito: string;

  ordinaProdotto(prodotto: IProdotto): void;
}

// Interface for production processes
export interface IProcessoProduzione {
  nomeProcesso: string;
  descrizione: string;
  prodottiInProduzione: IProdotto[];

  aggiungiProdotto(prodotto: IProdotto): void;
}
