
var items
var selectedIndex
var originalArray = []

var isSimulating
// Bubble Sort Variables
var end
var previousMarkedJ = -1

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

var i, j, length

function start(_items) {
    items = _items
    selectedIndex = -1
    isSimulating = false

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
    for(var i=0;i < levels[selectedIndex].array.length; i++) {
        originalArray[i] = levels[selectedIndex].array[i]
    }
}

function simulate() {
    if(selectedIndex == -1 || isSimulating) {
        return
    }
    levels[selectedIndex].function();
}

function bubble_sort() {
    // if originalArray is already sorted, return
    if(isSorted()) {
        return
    }

    isSimulating = true
    length = originalArray.length

    i=0
    j=0
    previousMarkedJ = -1
    end = length -1

    // start timer
    items.timer.running = true
    items.timer.repeat = true
}

function bSortNext() {
    if(previousMarkedJ != -1) {
        unmark(originalArray[previousMarkedJ])
        unmark(originalArray[previousMarkedJ+1])
    }
    markRed(originalArray[j])
    markBlue(originalArray[j+1])

    if(originalArray[j] > originalArray[j+1]) {
        interchangeBlocksWithLabels(originalArray[j], originalArray[j+1])
        var temp = originalArray[j]
        originalArray[j] = originalArray[j+1]
        originalArray[j+1] = temp
    }

    previousMarkedJ = j
    j++
    if(j >= end -i) {
        i++
        j = 0
        if(i >= end) {
            unmark(originalArray[previousMarkedJ])
            unmark(originalArray[previousMarkedJ+1])
            items.timer.running = false
            items.timer.repeat = false
        }
    }
}

function isSorted() {
    for(var i=0; i < originalArray.length-1;i++) {
        if(originalArray[i] > originalArray[i+1]) {
            return false
        }
    }
    return true
}

function interchangeBlocksWithLabels(label1, label2) {
    var block1, block2
    for(var i = 0;i < items.array.model;i++) {
        if(items.array.itemAt(i).value == label1) {
            block1 = items.array.itemAt(i)
        }
        if(items.array.itemAt(i).value == label2) {
            block2 = items.array.itemAt(i)
        }
    }
    var tempx, tempy
    tempx = block2.x
    tempy = block2.y

    block2.x = block1.x
    block2.y = block1.y

    block1.x = tempx
    block1.y = tempy
}

function markRed(label) {
    for(var i = 0;i < items.array.model;i++) {
        if( items.array.itemAt(i).value == label) {
            items.array.itemAt(i).selectBig = true
            items.array.itemAt(i).color = "red"
            return
        }
    }
}

function markBlue(label) {
    for(var i = 0;i < items.array.model;i++) {
        if( items.array.itemAt(i).value == label) {
            items.array.itemAt(i).color = "blue"
            return
        }
    }
}

function unmark(label) {
    for(var i = 0;i < items.array.model;i++) {
        if( items.array.itemAt(i).value == label) {
            items.array.itemAt(i).notSelected = true
            items.array.itemAt(i).color = "black"
            return
        }
    }
}

function selection_sort() {
    console.log("S Sort it")
}
