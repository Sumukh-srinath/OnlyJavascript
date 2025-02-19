const getOrder = async () => {
    const res = await fetch("https://example.com")
    console.log("Hello")
    console.log(res)
}

getOrder()