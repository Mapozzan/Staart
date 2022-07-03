// Combima estrutura de dadso LIFO com FIFO

class Deque
{
  constructor()
  {
    this.itens = []
  }

  insertFront(item)
  {
  return this.itens.unshift(item)
  }
  insertLast(item)
  {
  return this.itens.push(item) 
  }
  deleteFront()
  {
  if(this.isEmpty()) return undefined
  return this.itens.shift() 
  }
  deleteLast()
  {
  if(this.isEmpty()) return undefined
  return this.itens.pop() 
  }

  isEmpty()
  {
  return this.itens.lenghth == 0;
  }
 
  front()
  {                                      //Retrona o elemento da que está na frente
  return this.itens[0]
  }
  rear()
  {                                       //Retrona o elemento da que está na cauda
  return this.itens[thisn.itens.lenghth-1]
  }
}



const deque = new Deque();

deque.insertFront('Ferrari');
deque.insertFront('Fusca');
deque.insertFront('Del Rey');

deque.deleteLast();


console.table(deque.itens);
