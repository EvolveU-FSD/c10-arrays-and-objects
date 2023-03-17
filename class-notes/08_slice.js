const array = [0,1,2,3,4,5]
const startAt = 2
const endAt = 4

let slice = []
for(var index in array) {
    if (index >= startAt && index <= endAt)
        slice.push(array[index])
}

console.log(slice)
console.log

slice = []
array.forEach((val, index) => {
    if (index >= startAt && index <= endAt)
        slice.push(array[index])
})

console.log(slice)
console.log

slice = array.slice(startAt, endAt+1) // slice ends before the last num

console.log(slice)
console.log

// bonus slices!
console.log( array.slice(2))   // after start
console.log( array.slice(-2))  // before end

