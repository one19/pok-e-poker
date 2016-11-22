const fs = require('fs');

const WANTEDSTAT = process.argv[2];
const FILTER = (process.argv.length === 4) ? process.argv[3] : null;
const GENS = [151, 251, 386, 493, 649, 721, 802];
const STATS = {
  hp: 1,
  attack: 2,
  defense: 3,
  spAttack: 4,
  spDefense: 5,
  speed: 6,
  total: 7,
  average: 8
}

const statByGen = (stat) => {
  const pokemon = fs.readFileSync('pokelisted.csv', { encoding: 'utf8' }).split('\n');
  const legendaries = fs.readFileSync('legendaries.csv', { encoding: 'utf8' }).split('\n');
  const legendaryNums = legendaries.map(leg => {
    const matched = leg.match(/#[0-9]{3}/);
    if (matched) return Number(matched[0].slice(-3));
  });

  const genArrStore = {};
  pokemon.forEach( (poke) => {
    const alolanForm = poke.match(/\(alolan/gi);
    const megaForm = poke.match(/\(mega/gi);

    const pokeNum = Number(poke.split(' ')[0]);
    if (FILTER && legendaryNums.find(e => e === pokeNum)) return;
    let pokeGen = GENS.reduce( (a, gen) => {
      return (pokeNum > gen) ? a = a + 1 : a;
    }, 1);
    if (alolanForm) pokeGen = 7;
    if (megaForm) pokeGen = 6;

    const oneStat = Number(poke.split('  ')[STATS[stat]]);
    if (isNaN(oneStat)) console.log('wow, error', poke.split('  ')[0])
    if (!genArrStore[pokeGen]) return genArrStore[pokeGen] = [oneStat];
    return genArrStore[pokeGen].push(oneStat);
  });
  return genArrStore;
}

const returnAvg = (arr) => {
  const sum = arr.reduce((a, b) => a + b, 0);
  return sum/arr.length;
}

const mappedObj = (arrBlob) => {
  const ret = {};
  Object.keys(arrBlob).forEach((key) => {
    ret[key] = returnAvg(arrBlob[key]);
  })
  return ret;
}

console.log(mappedObj(statByGen(WANTEDSTAT)));
