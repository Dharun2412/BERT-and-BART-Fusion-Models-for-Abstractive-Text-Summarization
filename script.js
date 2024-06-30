function summarizeText() {
    var inputText = document.getElementById("inputText").value;
    fetch("http://127.0.0.1:5000/summarize", { 
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: inputText }),
})
    .then(response => response.json())
    .then(data => {
        document.getElementById("summary").innerText = data.summary;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


