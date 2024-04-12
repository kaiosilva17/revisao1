

const alunos = require("../models/alunos")

const alunosController = {
    getAll: async (req, res) => {
        res.json(await alunos.find())
    },
    get: async (req, res) => {
        try {
            res.json(await alunos.create(req.params.id))
        } catch (error) {
            res.status(404).json({ error: "Registro não encontrado" })
        }
    },
    create: async (req, res) => {
        try {

            let soma = 0
            const notas = req.body.notas
            const aluno = req.body

            for (let n of notas) {
                soma += n
            }

            const media = soma / notas.length

            aluno.media = media

            res.json(await alunos.create(aluno))
        } catch (error) {
            res.status(400).json(error.message)
        }
    },
    update: async (req, res) => {
        try {
            res.json(await alunos.findByIdAndDelete(req.params.id, req.body))
        } catch (error) {
            res.status(404).json({ error: "Registro não encontrado" })
        }
    },
    delete: async (req, res) => {
        try {
            res.json(await alunos.findByIdAndUpdate(req.params.id))
        } catch (error) {
            res.status(404).json({ error: "Registro não encontrado" })
        }
    },
}

module.exports = alunosController