//import Pessoa from './pessoa' 
//import './modulos/moduloA'
const moduloA = require('./modulos/moduloA')
const Pessoa = require('./pessoa')
import './assets' //sempre vai buscar o index.js

const atendente = new Pessoa
console.log(atendente.cumprimentar())