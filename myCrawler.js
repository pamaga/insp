
jQueryCode = function(){
    jQuery("img").css("border","2px solid red").click(function(e){console.log(this);alert(this.src)});
}

if(window.jQuery)  jQueryCode();
else{   
    var script = document.createElement('script');   
    script.type = 'text/javascript';
    script.src = "//ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js";
    document.head.appendChild(script);

    script.onload = jQueryCode;
}  
