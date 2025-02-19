function printResults(x) {
    console.log(x.title)
}
const fetchDataVal = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => data.map(printResults)) // Logs posts 2 and 3
}

fetchDataVal();


