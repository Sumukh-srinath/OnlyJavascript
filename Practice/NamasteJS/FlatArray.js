let n = [1, [2, 3, [4, 5]], 6, [7, [[[8]]]], [9, [10]]];

console.log(n.flat(Infinity))
res = []
function flatArray(numList) {
    for (let i = 0; i < numList.length; i++) {
        if (typeof (numList[i]) == 'number') {
            res.push(numList[i])
        }
        else {
            flatArray(numList[i])
        }
    }
    return res
}


console.log(flatArray(n))