const employees = [
    {
        name: 'Peter Griffin',
        service: 4,
        position: 'Grunt'
    },
    {
        name: 'Eric Cartman',
        service: 0.5,
        position: 'student'
    },
    {
        name: 'Tom Bombadill',
        service: 100,
        position: 'Master'
    },
    {
        name: 'Ender Wiggin',
        service: 2.5,
        position: 'Lt.'
    },
    {
        name: 'Han Solo',
        service: 3.2,
        position: 'Cpt.'
    }
]

const over3Years = employees.filter(function(e) {
    return e.service > 3
})

console.log(over3Years)

const longerThanTwelve = employees.filter(function(e) {
    return e.name.length > 12
})

console.log(longerThanTwelve)