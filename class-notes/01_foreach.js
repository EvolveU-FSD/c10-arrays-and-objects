const faculty = ['Margo', 'Jen', 'Danielle', 'Al', 'Chris', 'Greg']

for(var index in faculty){
    console.log(index, '->', faculty[index])
}

console.log()

function displayName(name, index) {
    console.log(index, '=', name)
}
faculty.forEach(displayName)

console.log()

faculty.forEach(
    (fac, index) => console.log(index, ':', fac)
)

