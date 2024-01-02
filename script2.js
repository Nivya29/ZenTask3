var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    for(var a in result){
        var b = result[a].flags.png;
    console.log(b);
}
};