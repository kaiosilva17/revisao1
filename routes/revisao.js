const express = require("express");
const alunosController = require('../controllers/alunos')
const router = express.Router();

router.get('/alunos', (req, res) => alunosController.getAll(req, res))
router.get('/alunos/recuperacao', (req, res) => alunosController.getAll(req, res))
router.get('/alunos/aprovado', (req, res) => alunosController.getAll(req, res))
router.get('/alunos/reprovado', (req, res) => alunosController.getAll(req, res))
router.get('/alunos/:id', (req, res) => alunosController.get(req, res))
router.post('/alunos', (req, res) => alunosController.create(req, res))
router.delete('/alunos/:id', (req, res) => alunosController.delete(req, res))
router.put('/alunos/:id', (req, res) => alunosController.update(req, res))

module.exports = router