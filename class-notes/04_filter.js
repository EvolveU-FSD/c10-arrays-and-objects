const somePets = [
    {name: 'Rex', type: 'dog'},
    {name: 'Whiskers', type: 'cat'},
    {name: 'Fido', type: 'dog'}
] 
const lookingForType = 'dog'

var justDogs = []
for (var index in somePets){
    if (somePets[index].type === lookingForType){
        justDogs.push(somePets[index])
    }
}

console.log('dogs', justDogs)
console.log()

justDogs = []
somePets.forEach(pet => {
    if (pet.type === lookingForType)
        justDogs.push(pet)
})

console.log('dogs', justDogs)
console.log()

justdogs = somePets.filter(pet => pet.type === lookingForType)

console.log('dogs', justDogs)
console.log()

