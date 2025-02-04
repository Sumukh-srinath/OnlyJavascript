function quicksort(arr) {
    if (arr.length <= 1) return arr;

    let pivot = arr[0]
    let left = quicksort(arr.slice(1).filter(x => x <= pivot))
    let right = quicksort(arr.slice(1).filter(x => x > pivot))

    let res = []
    for (let i = 0; i < left.length; i++) {
        res.push(left[i])
    }
    res.push(pivot)
    for (let i = 0; i < right.length; i++) {
        res.push(right[i])
    }

    // return [...left, pivot, ...right]
}

console.log(quicksort([6, 5, 2, 7, 9, 1]))