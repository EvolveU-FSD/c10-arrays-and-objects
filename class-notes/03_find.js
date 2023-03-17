const somePets = [
    {name: 'Rex', type: 'dog'},
    {name: 'Whiskers', type: 'cat'},
    {name: 'Fido', type: 'dog'}
] 
const lookingForType = 'dog'

let foundPet = null
for(var index in somePets){
    if (somePets[index].type === lookingForType) {
        foundPet = somePets[index]
        break
    }
}

console.log('found a dog', foundPet)
console.log()

foundPet = null
somePets.forEach(pet => {
    if (foundPet === null && pet.type === lookingForType){
        foundPet = pet
    }
})

console.log('found a dog', foundPet)
console.log()


foundPet = somePets.find(pet => pet.type === lookingForType)

console.log('found a dog', foundPet)
console.log()
