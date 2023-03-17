const somePets = [
    {name: 'Rex', type: 'dog'},
    {name: 'Whiskers', type: 'cat'},
    {name: 'Fido', type: 'dog'}
] 

let thereIsAtLeastOneDog = false
let everyPetSoFarHasAName = true
for(var index in somePets){
    thereIsAtLeastOneDog = thereIsAtLeastOneDog || somePets[index].type === 'dog'
    everyPetSoFarHasAName = everyPetSoFarHasAName && somePets[index].name != null
}

console.log('at least one dog', thereIsAtLeastOneDog)
console.log('all pets have a name', everyPetSoFarHasAName)
console.log()

thereIsAtLeastOneDog = false
everyPetSoFarHasAName = true
somePets.forEach(pet => {
    thereIsAtLeastOneDog = thereIsAtLeastOneDog || pet.type === 'dog'
    everyPetSoFarHasAName = everyPetSoFarHasAName && pet.name != null 
})

console.log('at least one dog', thereIsAtLeastOneDog)
console.log('all pets have a name', everyPetSoFarHasAName)
console.log()

thereIsAtLeastOneDog = somePets.some(pet => pet.type === 'dog')
everyPetSoFarHasAName = somePets.every(pet => pet.name != null)

console.log('at least one dog', thereIsAtLeastOneDog)
console.log('all pets have a name', everyPetSoFarHasAName)
console.log()
