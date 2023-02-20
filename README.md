# About
Simple sorting system like in RPG inventory

Algoritm: 

- sort by type of item and then by count
- compare the sum of the current and the next item

    - If sum = container_size, or its last item in list, or list item of this type, we push this to result array.
    - If sum < container_size, we add current and next, then push...

# Input:

```js
{
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
```

# Ouptut:

```js
[
  { name: 'module', count: 10 },
  { name: 'module', count: 10 },
  { name: 'module', count: 9 },
  { name: 'gun', count: 10 },
  { name: 'gun', count: 10 },
  { name: 'gun', count: 10 },
  { name: 'gun', count: 2 }
]
```