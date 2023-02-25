function fetchData(URL){
    return new Promise(function(resolve, reject){
        let req = new XMLHttpRequest();
        req.open("GET", URL);
        req.onload = function(){
            if(req.status == 200){
                resolve(req.responseText);
            }else{
                reject("Error" + req.status);
            }
        }
        req.onerror = function(){
            reject("Network error");
        };
    });
};

fetchData("https://jsonplaceholder.typicode.com/users")
    .then(function(data){
        console.log(data);
    })
    .catch(function(error){
        console.log(error);
});













// let promise = new Promise((resolve, reject) => {
//     let a = 1 + 1

//     if (a == 2) {
//         resolve('Success')
//     } else {
//         reject('Failed')
//     }   
// });

// promise.then((message) => {
//     console.log('This is in the then ' + message)
// });
