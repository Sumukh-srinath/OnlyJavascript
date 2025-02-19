function handleButtonClick() {
    let buttonClickCount = 0;

    document.getElementById("clickMe").addEventListener("click", function xyz() {
        console.log("Button Clicked: ", ++buttonClickCount)
    })
}

handleButtonClick()