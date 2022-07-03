class HashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i); //charCodeAt transforma um caracter num equivalende númerico
    }
    return hash % this.table.length; //Garante o tamanhao da conversão
  }

  put(key, value) {
    const index = this._hash(key);
    this.table[index] = [key, value];
    this.size++;
  }

  get(key) {
    const index = this._hash(key);
    return this.table[index];
  }

  delete(key) {
    const index = this._hash(key);
    if (this.table[index] && this.table[index].length) {
      this.table[index] = undefined;
      this.size--;
      return true;
    } else {
      return fasle;
    }
  }

  clear() {
    this.table = [];
    this.size = 0;
  }
}

const meusContatos = new HashTable();
meusContatos.put('Marco', '406');
meusContatos.put('Andre', '353');
meusContatos.put('Pozzan', '578');

console.table(meusContatos.table);
