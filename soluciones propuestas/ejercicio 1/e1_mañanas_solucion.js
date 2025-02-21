import { banana, papaya, fruit } from './fruits.js'

// -----------------------------------------
// Apartado 1
// -----------------------------------------

async function getFruit() {
  const which = await fruit()
  return which == 'banana' ? banana() : papaya()
}

console.log(await getFruit())

// -----------------------------------------
// Apartado 2
// -----------------------------------------

async function fiveFruits() {
  const fruits = Array.from({ length: 5 }, () => getFruit())
  return Promise.all(fruits)
}

console.log(await fiveFruits())

// -----------------------------------------
// Apartado 3
// -----------------------------------------

function tenFruits() {
  try {
    let numFruits = 0

    function printFruits(fruits) {
      if (numFruits >= 10) return
      numFruits += fruits.length
      console.log(fruits.join('\n'))
    }

    for(let i = 0; i < 3; i++) {
      fiveFruits().then(printFruits)
    }

  } catch {
    throw new Error('Mango!')
  }
}

tenFruits()
