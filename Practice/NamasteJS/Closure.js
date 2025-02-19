let p = 6000
global.p = p
function a() {
    let p = 10
    a.p = p
    function b() {
        let p = 1000
        console.log(global.p)
        console.log(a.p);
        console.log(p)

    }
    return b
}
let c = a()
c()