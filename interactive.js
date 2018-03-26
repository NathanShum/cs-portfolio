var date = document.getElementById("date");
var search = document.getElementById("search");
var info = document.getElementById("info");

search.addEventListener("click", function(){
    var date = date.value;
    var search = search.value;
    
    if (date === "1981-1989") {
        info.innerHTML = "hi";
    }
});