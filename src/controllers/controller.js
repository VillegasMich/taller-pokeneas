import { pokeneas } from '../constants/pokeneas.js'

const getOneInfo = (_req, res) => {
  const number = Math.floor(Math.random() * pokeneas.length)
  const { id, nombre, altura, habilidad, host } = pokeneas[number]
  res.send({ id, nombre, altura, habilidad, host });
}

const getOneImage = (_req, res) => {
  const number = Math.floor(Math.random() * pokeneas.length)
  const { imagen, fraseFilosofica, host } = pokeneas[number]
  res.render('index', { image: imagen, host: host, frase: fraseFilosofica });
}

export const pokeController = {
  getOneInfo,
  getOneImage,
}
