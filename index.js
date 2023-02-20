const sort = require('./sortInventory')

let input = {
    "data": [
        {name: 'gun', count: 3},
        {name: 'module', count: 3},
        {name: 'gun', count: 5},
        {name: 'gun', count: 1},
        {name: 'module', count: 8},
        {name: 'gun', count: 7},
        {name: 'gun', count: 10},
        {name: 'module', count: 5},
        {name: 'module', count: 3},
        {name: 'module', count: 10},
        {name: 'gun', count: 5},
        {name: 'gun', count: 1}
    ],
    "condition": {
        "container_size": 10,
        "sort_by": ["count", "name"]
    }
}

console.log(sort(input))