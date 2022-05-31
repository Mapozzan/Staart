//Lista Encadeada Simples

class No {
  constructor(elemento) {
    this.elemento = elemento;
    this.proximo = undefined;
  }
}

class ListaEncadeada {
  constructor() {
    this.head = undefined;
  }

  insertFirst(elemento) {
    const novo = new No(elemento);
    let atual;

    if (!this.head) {
      this.head = novo;
    } else {
      atual = this.head;
      novo.proximo = atual;
      this.head = novo;
    }

    return elemento;
  }

  insertLast(elemento) {
    const novo = new No(elemento);
    let atual;

    if (!this.head) {
      this.head = novo;
    } else {
      atual = this.head;
      while (atual.proximo) {
        atual = atual.proximo;
      }
      atual.proximo = novo;
    }

    return elemento;
  }

  serchAt(posicao) {
    let atual = this.head;
    for (let i = 0; i < posicao && atual; i++) {
      atual = atual.proximo;
    }

    return atual;
  }

  insertAt(elemento, posicao) {
    const novo = new No(elemento);
    if (posicao == 0) {
      this.insertFirst(elemento);
    } else {
      const anterior = this.serchAt(posicao - 1);
      const atual = anterior.proximo;
      novo.proximo = atual;
      anterior.proximo = novo;
    }

    return elemento;
  }

  traversal() {
    if (!this.head) {
      return undefined;
    } else {
      let atual = this.head;
      let elementoLista = [];
      while (atual) {
        elementoLista.push(atual.elemento);
        atual = atual.proximo;
      }
      return elementoLista;
    }
  }

  deleteAt(posicao) {
    let atual = this.head;
    if (posicao == 0) {
      this.head = atual.proximo;
    } else {
      let anterior = atual;
      for (let i = 0; i < posicao; i++) {
        anterior = atual;
        atual = atual.proximo;
      }
      anterior.proximo = atual.proximo;
    }

    return posicao;
  }

  indexOf(elemento) {
    let atual = this.head;
    let contador = 0;
    while (atual) {
      if (atual.elemento == elemento) {
        return contador;
        break;
      } else {
        atual = atual.proximo;
        contador++;
      }
    }
    return undefined;
  }
}
