// classes.ts
import { ICliente, IProcessoProduzione, IProdotto } from "./interface";

// Implementation of the Product class
export class Prodotto implements IProdotto {
  public stato: "disponibile" | "esaurito" = "disponibile";

  constructor(
    public tipo: "costume da bagno" | "pareo" | "cappello",
    public id: number,
    public taglia: string,
    public colore: string
  ) {}

  assegnaCliente(cliente: ICliente): void {
    if (this.stato === "disponibile") {
      cliente.ordinaProdotto(this);
      this.stato = "esaurito";
      console.log(
        `Prodotto ID ${this.id} (${this.tipo}) assegnato a ${cliente.nome} ${cliente.cognome}.`
      );
    } else {
      console.log(`Prodotto ID ${this.id} (${this.tipo}) non disponibile.`);
    }
  }
}

// Implementation of the Client class
export class Cliente implements ICliente {
  private ordini: IProdotto[] = [];

  constructor(
    public nome: string,
    public cognome: string,
    public email: string,
    public metodoPagamentoPreferito: string
  ) {}

  ordinaProdotto(prodotto: IProdotto): void {
    if (prodotto.stato === "disponibile") {
      this.ordini.push(prodotto);
      console.log(
        `${this.nome} ${this.cognome} ha ordinato il prodotto ID ${prodotto.id} (${prodotto.tipo}).`
      );
    } else {
      console.log(
        `Il prodotto ID ${prodotto.id} (${prodotto.tipo}) non è disponibile per l'ordine.`
      );
    }
  }

  visualizzaOrdini(): void {
    if (this.ordini.length > 0) {
      console.log(`Ordini di ${this.nome} ${this.cognome}:`);
      this.ordini.forEach((prodotto) =>
        console.log(
          `- ${prodotto.tipo} ID ${prodotto.id} (${prodotto.colore}, ${prodotto.taglia})`
        )
      );
    } else {
      console.log(`${this.nome} ${this.cognome} non ha effettuato ordini.`);
    }
  }
}

// Implementation of the ProcessProduction class
export class ProcessoProduzione implements IProcessoProduzione {
  public prodottiInProduzione: IProdotto[] = [];

  constructor(public nomeProcesso: string, public descrizione: string) {}

  aggiungiProdotto(prodotto: IProdotto): void {
    this.prodottiInProduzione.push(prodotto);
    console.log(
      `Prodotto ID ${prodotto.id} (${prodotto.tipo}) aggiunto al processo di produzione ${this.nomeProcesso}.`
    );
  }

  visualizzaProdottiInProduzione(): void {
    if (this.prodottiInProduzione.length > 0) {
      console.log(
        `Prodotti in produzione nel processo "${this.nomeProcesso}":`
      );
      this.prodottiInProduzione.forEach((prodotto) =>
        console.log(
          `- ${prodotto.tipo} ID ${prodotto.id} (${prodotto.colore}, ${prodotto.taglia})`
        )
      );
    } else {
      console.log(
        `Nessun prodotto in produzione nel processo "${this.nomeProcesso}".`
      );
    }
  }
}
