const somePets = [
    {name: 'Rex', type: 'dog'},
    {name: 'Whiskers', type: 'cat'},
    {name: 'Fido', type: 'dog'}
] 

var petNames = []
for(var index in somePets){
    petNames.push(somePets[index].name)
}

console.log(petNames)
console.log()

petNames = []
somePets.forEach(pet => petNames.push(pet.name))

console.log(petNames)
console.log()

petNames = somePets.map(pet => pet.name)

console.log(petNames)
console.log()
