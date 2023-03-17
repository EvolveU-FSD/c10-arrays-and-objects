const somePets = [
    {name: 'Rex', type: 'dog'},
    {name: 'Whiskers', type: 'cat'},
    {name: 'Fido', type: 'dog'}
] 

const justDogs = somePets.filter(pet => pet.type === 'dog')
var dogNames = justDogs.map(dog => dog.name)

console.log('dog names', dogNames)
console.log()

dogNames = somePets.
    filter(pet => pet.type === 'dog').
    map(pet => pet.name)

console.log('dog names:', dogNames)