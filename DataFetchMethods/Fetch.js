// 1. Using `async/await` (Standard Function)
console.log("This is async await way of doing things");

async function getData() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const response = await data.json();
    console.log(response.slice(0, 10)); // Logs first 10 posts
}

getData();


// 2. Using `async/await` (Arrow Function)
console.log("Using async arrow function");

const getData1 = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const response = await data.json();
    console.log(response.slice(0, 10)); // Logs first 10 posts
    return response; // Returns the data
}

getData1();


// 3. Using `.then()` with Fetch (Nested `.then()`)
console.log("Type 3 of getting data using fetch");

const fetchingVal = fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
        res.json().then((data) => {
            console.log(data.slice(1, 10)); // Logs posts 2 to 10
        });
    });


// 4. Using `.then()` with Fetch (Chaining `.then()`)
const fetchDataVal = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data.slice(1, 3))) // Logs posts 2 and 3
}

fetchDataVal();


// 5. Using `.catch()` for Handling Errors
console.log("With error handling");

const fetchDataWithCatch = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => console.log(data.slice(0, 5))) // Logs first 5 posts
        .catch(error => console.error('There was a problem with the fetch operation:', error));
};

fetchDataWithCatch();


// 6. Using `try/catch` with `async/await`
console.log("Using try/catch with async/await");

async function getDataWithTryCatch() {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!data.ok) {
            throw new Error('Network response was not ok');
        }
        const response = await data.json();
        console.log(response.slice(0, 5)); // Logs first 5 posts
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

getDataWithTryCatch();
