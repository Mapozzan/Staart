const { Router } = require('express')
const { UsersRepository } = require('./repository')
const Joi =  require('joi')

const withAsyncErrorHandler = require('../middlewares/async_error')
const validate = require('../middlewares/validate')

const router = Router()

const repository = UsersRepository()

const NotFound = {
  error: 'Not found',
  message: 'Resource not found',
}

/*
  CRUD de usuários
  - C: create
  - R: read (listar + detalhes)
  - U: update
  - D: delete
*/

// ************
// ** create **
// ************

const CreateUserSchema = {
  body: Joi.object({
    username: Joi.string().email().required(),
    firstname: Joi.string().regex(/^[A-Za z]+(\s?[A Za z])*$/).required(),
    lastname: Joi.string().regex(/^[A-Za z]+(\s?[A Za z])*$/).required(),
    password: Joi.string().min(5).max(40).required(),
  })
}

const createUser = async (req, res) => {
  // e se não for um JSON de usuário válido ?
  const user = req.body

  const inserted = await repository.insert(user)
  const location = `/api/users/${inserted.id}`
  res.status(201).header('Location', location).send(inserted)
}

router.post('/',validate(CreateUserSchema), withAsyncErrorHandler(createUser))

// ************
// ** update **
// ************

const UpadateUserSchema = {
  body: Joi.object({
    firstname: Joi.string().regex(/^[A-Za z]+(\s?[A Za z])*$/).required(),
    lastname: Joi.string().regex(/^[A-Za z]+(\s?[A Za z])*$/).required(),
    password: Joi.string().min(5).max(40).required(),
  }).or('firstname','lastname', 'password'),
  params: {
    id: Joi.number().required(),
  },
}

const updateUser = async (req, res) => {
  // e se for NaN ?
  const id = parseInt(req.params.id)

  // e se não for um JSON de usuário válido ?
  const body = req.body


  const registered = await repository.get(id)

  const user = { ...registered, ...body, id }
  const updated = await repository.update(user)
  res.status(200).send(updated)
}

router.put('/:id', validate(UpadateUserSchema), withAsyncErrorHandler(updateUser))

// ************
// ** delete **
// ************

const DeleteUserSchema = {
  params: {
    id: Joi.number().required(),
  },
}

const deleteUser = async (req, res) => {
  // e se for NaN ?
  const id = parseInt(req.params.id)

  await repository.get(id)


  await repository.del(id)
  res.status(204).send()
}

router.delete('/:id',validate(DeleteUserSchema), withAsyncErrorHandler(deleteUser))

// **********
// ** read **
// **********

const GetUserSchema = {
  params: {
    id: Joi.number().required(),
  },
}

const listUsers = async (_req, res) =>
  repository
    .list()
    .then(users => res.status(200).send({ users }))

const getUser = async (req, res) => {
  // e se for NaN
  const id = parseInt(req.params.id)

  const user = await repository.get(id)


  res.status(200).send(user)
}

router.get('/', withAsyncErrorHandler(listUsers))
router.get('/:id',validate(GetUserSchema), withAsyncErrorHandler(getUser))

module.exports = router
