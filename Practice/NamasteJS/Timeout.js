///print 1 to 5 each second
//differentiate block scope and global scope

function a() {
    for (var i = 0; i <= 5; i++) {
        setTimeout(function () {
            console.log(i)
        }, i * 1000)
    }
}
function b() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i)
        }, i * 1000)
    }

}

function c() {
    for (var i = 1; i <= 5; i++) {
        function close(x) {
            setTimeout(function () {
                console.log(x)
            }, i * 1000)
        }
        close((i))
    }

}


c()