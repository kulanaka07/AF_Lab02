function fetchData(URL) {
    return new Promise(function (resolve, reject) {
        let req = new XMLHttpRequest();
        req.open("GET", URL);
        req.onload = function () {
            if (req.status == 200) {
                resolve(req.responseText);
            } else {
                reject("Error" + req.status);
            }
        }
        req.onerror = function () {
            reject("Network error");
        };
        req.send();
    });
}

async function fetchDataAsync(URL) {
    try{
        let data = await fetchData(URL);
        console.log(data);
    }catch(error){
        console.log(error);
    }
}
fetchDataAsync("https://jsonplaceholder.typicode.com/users");