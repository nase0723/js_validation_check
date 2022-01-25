window.onload = function(){
    document.onkeypress = enterForbidden;
    function enterForbidden(){
        if(window.event.keyCode == 13){
            return false;
        }
    }
}