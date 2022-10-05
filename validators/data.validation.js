const e = require('express');
const { param, body } = require('express-validator');
const { validator } = require('./validator');


const getDatabyName  = [
     param('nama').isLength({min: 8}),
     validator
 ]

const getDatabyEmailTelephone = [
     param('email').isEmail(),
     param('telepon').isLength({min: 12}),
     validator
]
const patchDatabyName = [
     body('nama').isLength({min: 8}),
     body('telepon').isLength({min: 12}),
     validator
]
const deleteDatabyEmail = [
     param('email').isEmail(),
     validator
]

const addData = [
     body('nama').isLength({min: 8}),
     body('jenis_kelamin').isIn(['L','P']),
     body('angkatan').isNumeric({gt: 2018}),
     body('email').isEmail(),
     body('telepon').isLength({min: 12}),
     body('deskripsi').not().isEmpty(),
     validator
]

const addBulkData = [
     body('*.nama').isLength({min: 8}),
     body('*.jenis_kelamin').isIn(['L','P']),
     body('*.angkatan').isNumeric({gt: 2018}),
     body('*.email').isEmail(),
     body('*.telepon').isLength({min: 12}),
     body('*.deskripsi').not().isEmpty(),
     validator
]

module.exports = {
     getDatabyName,
     getDatabyEmailTelephone,
     patchDatabyName,
     deleteDatabyEmail,
     addData,
     addBulkData
}
