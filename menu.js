
var items
var selectedIndex

var levels = [
    {
        "name": "Bubble Sort",
        "description": "Arranging a given list of numbers in ascending order by Bubble Sort",
        "function": bubble_sort,
        "array": [2,5,1,6,7,3]
    },
    {
        "name": "Selection Sort",
        "description": "Arranging a given list of numbers in ascending order by Selection Sort",
        "function": selection_sort,
        "array": [10,9,1,5,4,2]
    }
]

function start(_items) {
    items = _items
    selectedIndex = -1

    initialiseMenuItems()
}

function initialiseMenuItems() {
    items.elements.model = levels.length
    for(var i=0; i<items.elements.model;i++) {
        items.elements.itemAt(i).topic = levels[i].name
        items.elements.itemAt(i).index = i
    }
}

function load(index) {
    if(selectedIndex != -1) {
        items.elements.itemAt(selectedIndex).selected = false
    }
    selectedIndex = index
    items.elements.itemAt(selectedIndex).selected = true

    items.header.text = levels[index].name
    items.description.text = levels[index].description
    items.array.model = levels[index].array.length
    initialiseArray()
}

function initialiseArray() {
    for(var i = 0;i < items.array.model;i++) {
        items.array.itemAt(i).value = levels[selectedIndex].array[i]
    }
}

function simulate() {
    if(selectedIndex == -1) {
        return
    }
    levels[selectedIndex].function();
}

function bubble_sort() {
    console.log("B Sort it")
}

function selection_sort() {
    console.log("S Sort it")
}
