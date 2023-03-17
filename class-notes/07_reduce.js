const dinnerOrder = [
    {name: 'Diet Coke', price: 2.5},
    {name: 'Nachos', price: 12},
    {name: 'Apple Pie', price: 5}
]

var total = 0
for(var index in dinnerOrder) {
    total += dinnerOrder[index].price
}

console.log('price', total)
console.log()

total = 0
dinnerOrder.forEach(item => total += item.price)

console.log('price', total)
console.log()

total = dinnerOrder.reduce( 
    (priceSoFar, newItem) => {
        // console.log(priceSoFar, newItem)
        return priceSoFar + newItem.price
    },
    0 // starting price
)

console.log('price', total)
console.log()
