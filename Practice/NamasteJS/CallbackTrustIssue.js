console.log("Start")
setTimeout(function () {
    console.log("Set Time Out logged")
}, 0)
console.log("End")

let timeNow = new Date().getTime()
let endTime = new Date().getTime()
function unblockMainThread() {
    if (endTime < timeNow + 10000) {
        setTimeout(unblockMainThread, 0)
    }
    else {
        console.log("Logging after 10 seconds")

    }

}

unblockMainThread()