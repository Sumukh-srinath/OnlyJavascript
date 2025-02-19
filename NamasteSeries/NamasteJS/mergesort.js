function mergesort(arr) {
    return (arr.length <= 1)
        ? arr
        : merge(
            mergesort(arr.slice(0, Math.floor(arr.length / 2))),
            mergesort(arr.slice(Math.floor(arr.length / 2)))
        );
}


function merge(left, right) {
    let i = 0, j = 0;
    let res = []
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            res.push(left[i++])
        }
        else {
            res.push(right[j++])
        }
    }
    while (i < left.length) {
        res.push(left[i++])
    }
    while (j < right.length) {
        res.push(right[j++])
    }
    return res
}


console.log(mergesort([7, 9, 32, 1, 5, 6, 2, 3]))