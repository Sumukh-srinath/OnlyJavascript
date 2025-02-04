function delay(millis) {
    return new Promise(function (resolve) {
        return setTimeout(function () {
            console.log("Resolved")
            resolve()
        }, millis)
    })
}


delay(5000)