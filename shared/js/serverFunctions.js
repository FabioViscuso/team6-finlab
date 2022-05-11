function deleteDataFromServer() {
    fetch("http://127.0.0.1:5000/data", {
        method: "delete",
    })
        .then((response) => response.text())
        .then((data) => console.log(data))
        .catch((e) => console.log(e));
}

function getDataFromServer() {
    fetch("http://127.0.0.1:5000/data")
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((e) => console.log(e));
}
