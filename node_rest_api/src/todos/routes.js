const {Router} = require('express')
const{TodosRepository} =require('./repository')
const logger = require('../middlewares/logger')

const notFound = {
  error: 'Not Found',
  message: 'Resource not found',
}

const router = Router()
router.use(logger())

// ** ToDo **
const todosRepository = TodosRepository()

router.get('/:id', async (req,res) => {
  const id = parseInt(req.params.id)

  const todo = await todosRepository.get(id)
  if(!todo){
    res.status(404).send({notFound})
    return
  }
  res.status(200).send(todo)
})

router.post('/:id', async (req,res) => {
  const todo = req.body
  const inserted = await todosRepository.insert(todo)
  res
    .status(201)
    .header('Location', `/todos/${inserted.id}`)
    .send(inserted)
})

router.put('/:id', async (req,res) => {
  const id = patseInt(req.params.id)
  const todo = {... req.body, id}

  const found = await todosRepository.get(id)
  if(!found){
    res.status(404).send({notFound})
    return
  }
  const update = await todosRepository.update(todo)
  res.status(200).send(update)
})

router.delete('/:id', async (req,res) => {
  const id = patseInt(req.params.id)
  const todo = {... req.body, id}

  const found = await todosRepository.get(id)
  if(!found){
    res.status(404).send({notFound})
    return
  }
  await todosRepository.update(todo)
  res.status(204).send()
})

//Get /todos
router.get('/', async (_req,res) => {
  todosRepository
    .list()
    .then(todos => res.status(204).send({todos}))
})

module.exports = router
