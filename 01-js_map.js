// Class code examples


const names = ["Marco", "Carlos", "Carol"]

const capitalise = (string)=> {
    return string.toUpperCase()
}

const allCaps = names.map(capitalise) // ["Marco", "Carlos", "Carol"].map()

console.log(names,allCaps)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// const someCallbackFunction = ()=> {}
const double = numbers.map((element)=> { return element * 2}) // numbers.map ( someCallbackFunction )

console.log(double)

const students = [
    {name: 'Rafa', color: 'Blue', age: 12},
    {name: 'Elise', color: 'Pink', age: 21},
    {name: 'Bodei', color: 'Yellow', age: 31},
    {name: 'Jorge', color: 'Red', age: 11}
    ]

const greetings = students.map( (students)=> {
    return `Hello ${students.name} you are ${students.age} years old and you fav color is ${students.color}`
})

// greetings.forEach(console.log)
console.log(greetings)

console.log(
    ["Marco", "Carlos", "Carol"].map(()=> {}).length
)
console.log
("Last console:", numbers
    .map((number)=>{return number * 2 })
    .filter((number)=>{return number < 13})
    .sort((a,b)=> {return a - b}))

    console.log
("Last console:", numbers
    .map((number)=>{return number * 2 })
    .filter((number)=>{return number < 13})
    .sort((a,b)=> {return b - a}))