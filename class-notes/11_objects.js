const studentsByStudentId = {
    123: {name: 'Chris', gpa: 3.7},
    234: {name: 'Danielle', gpa: 3.9},
    678: {name: 'Greg', gpa: 3.8}
}

console.log(
    Object.keys(studentsByStudentId)
)
console.log()

const studentsWithId = Object.keys(studentsByStudentId).map(
    id => {
        return {...studentsByStudentId[id], id: id}
    }
)

console.log(studentsWithId)
console.log()

console.log(
    Object.values(studentsByStudentId)
)

console.log()

const gregsRecord = Object.values(studentsByStudentId).
    find(record => record.name === 'Greg')

console.log('gregs record:',  gregsRecord)
console.log()

const newGpa = {gpa: 4}
Object.assign(studentsByStudentId[123], newGpa)

console.log(studentsByStudentId)