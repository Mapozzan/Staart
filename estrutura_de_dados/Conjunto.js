const meuConjuto = new Set();

const timesNBA = [
  'Grizzlies',
  'Knicks',
  'Celtics',
  'Bulls',
  'Suns',
  'Grizzlies',
];

// O ultimo elemento será excluido por ser repetido

const meuCampeonato = new Set(timesNBA);

meuCampeonato.add('Heat');
meuCampeonato.add(44);
meuCampeonato.add(true);

const timeFlorida = ['Heat']; // é incluido no conjunto por ser um objeto diferente apesar de possuir o mesmo valor de um outro elemento
meuCampeonato.add(timeFlorida);

meuCampeonato.delete(44);
meuCampeonato.delete(true);

//meuConjuto.forEach((valor) =>){
//  console.table(valor);
//}

if (!meuCampeonato.has('Mavericks')) {
  meuCampeonato.add('Mavericks');
}

const valoresConjunto = meuCampeonato.values();

for (let valor of valoresConjunto) {
  console.log(valor);
}

console.log(meuCampeonato.size);

//const entradas = meuCampeonato.entries();

//for (let entrada of entradas) {
//  console.log(entrada);
//}

