
function numCheck(name){
    const numbers = /[1234567890]/;
    return name.test(numbers)
}


function nameCheck(){
    var name = document.getElementById("name").value

    if(name == "" || name == null){
        document.getElementById("error-name").innerHTML = "This area should not be blank"
    }else{
        document.getElementById("error-name").innerHTML = ""
    }
}

var item = 123 
if(numCheck(item)){
    console.log("number true");
}else{
    console.log("not number");
}
