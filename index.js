// run `node index.js` in the terminal 

class Deque(){
  constructor(){
    this.itens = []
  }
}

insertFront(item){
  return this.itens.unshift(item)
}
insertLast(item){
  return this.itens.push(item) 
}
deleteFront(){
  return this.itens.shift(item) 
}
deleteLast(){}
front(){}
rear(){}




console.log(`Hello Node.js v${process.versions.node}!`);
