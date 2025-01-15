console.log("This is async await way of doing things")


async function getData() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const response = await data.json()
    console.log(response.slice(0, 10))
}

// getData()

console.log("Using async arrow function")
const getData1 = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const response = await data.json()
    console.log(response.slice(0, 10))
    return response
}

// getData1()


// console.log("Type 3 of getting data using fetch")
// const fetchingVal = fetch('https://jsonplaceholder.typicode.com/posts').then((res) => {
//     res.json().then((data) => {
//         console.log(data.slice(1, 10))
//     })
// }
// )


const fetchDataVal = () => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data => console.log(data.slice(1, 3)))
}

fetchDataVal()