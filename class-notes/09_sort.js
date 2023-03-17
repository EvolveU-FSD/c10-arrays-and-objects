const movies = [
    {name: "Antman", imdbScore: 7},
    {name: "Cabin", imdbScore: 8},
    {name: "Shazam", imdbScore: 6},
    {name: "Scream", imdbScore: 9},
]

// not going to loop this one.
// hoping to show how to sort by hand near end of course


function compareTwoMovies_ascending(first, second) {
    // for acscending:
    // return a negative number if the first movies 
    // is before the second movie
    return first.imdbScore - second.imdbScore
}
let sortedMovies = movies.sort(compareTwoMovies_ascending)

console.log('sorted movies ascending order', sortedMovies)
console.log()

function compareTwoMovies_descending(first, second) {
    // for descending:
    // return a positive number if the first movies 
    // is before the second movie
    return second.imdbScore - first.imdbScore
}
sortedMovies = movies.sort(compareTwoMovies_descending)

console.log('sorted movies descending order', sortedMovies)
console.log()

sortedMovies = movies.sort( (a,b) => {
    return a.name < b.name ? -1 : 1
})

console.log('sorted movies descending order by name', sortedMovies)
console.log()
