const faculty = ['Margo', 'Jen', 'Danielle', 'Al', 'Chris', 'Greg']
const lookingFor = 'Jen'

let includes = false
for (var index in faculty) {
    console.log(faculty[index])
    if (faculty[index] === lookingFor )
    {
        includes = true
        break
    }
}

console.log('contains', lookingFor, '=', includes)
console.log()

includes = false
faculty.forEach(person => {
    if (person === lookingFor) {
        includes = true
        // break - can't break need to check them all
    }
})

console.log('contains', lookingFor, '=', includes)
console.log()

includes = faculty.includes(lookingFor)

console.log('contains', lookingFor, '=', includes)
console.log()


