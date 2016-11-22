const fs = require('fs');

const normalizer = () => {
  const pokemon = fs.readFileSync('pokelist.csv', { encoding: 'utf8' }).split('\n');

  const updated = pokemon.map(poke => {
    const allShit = poke.split('  ');
    const nameShit = allShit[0];
    allShit.shift();
    const joinedShit = allShit.join(' ');
    const goodSpacedOtherShit = joinedShit.split(' ').join('  ');
    return `${nameShit}  ${goodSpacedOtherShit}`;
  }).join('\n');
  fs.writeFileSync('pokeListed.csv', updated);
}

normalizer();
