fetch("https://example.com")
    .then(function (res) {
        return res.json()
    })  // Parse the response as JSON
    .then((res1) => console.log(res1))  // Log the parsed JSON (res1)
    .catch((error) => console.error('Error:', error));  