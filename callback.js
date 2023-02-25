//Function

function fetchData (URL, callback){

    var request = new XMLHttpRequest();
    request.open("GET", URL);
    request.onload = function(){
        if(request.status ==200){
            //request
            callback(null, request.responseText);
        }else{
            callback(new Error("Error" + request.status));
        }
    }

    request.onerror = function(){
    callback("network error"+ request.status);
    };
    request.send();
}

fetchData("https://jsonplaceholder.typicode.com/users",function(error1, data1) {
    if(error1){
        return console.log(error1);
    }else{
        console.log(data1);
    }
});
