$(document).ready(function(){
    $("#gform").validate({
        rules:{
            name:{
                required:true,
                minlength:4
            },
            Email:{
                required:true,
                email:true
            },
            subject:{
                required:true
            },
            message:{
                required:true
            }
        }
    })
    $("gform").submit(function(e){
        if(validation==true)
            return true;
        return false;
    })
})