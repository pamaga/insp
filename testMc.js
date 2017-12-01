//fetch('http://ferozo3dev.dat/application/assets/built/testMc.js').then(response => response.text()).then(text => eval(text)).then(() => { console.log("[log] Todo cargado") })

console.log("[log] ...cargando");

if (typeof(jQuery) == 'undefined') {
    fetch('https://code.jquery.com/jquery-3.1.1.min.js')
        .then(response => response.text())
        .then(text => eval(text))
        .then(() => { console.log("[log] Listo Jquery");start(); });
} else {
    console.log("[log] Listo Jquery (ya estaba)");
    start();
}
 

function start(){
    console.log("[log] ...start")
    findAndBind();
    
    //$(document).bind('DOMNodeInserted', function(e) {
    //    console.log("Contenido Cargado");
    //    findAndBind();
    //});
}

    
function findAndBind(){
    console.log($("img:not(.MYCL)").length);
    //$("img:not(.MYCL)").bind("contextmenu", function(ev){
    //$("img").bind("contextmenu", function(ev){
    //         ev.preventDefault();
    //         console.log(this.src);
    //         console.log("L 1");
    //         return false;   
    //     }).then(function(){
    //         console.log("L 2");
    //         $("img:not(.MYCL)").addClass("MYCL");
    //         
    //     });
    

    $("div").hover(
        function() { 
                    $("div").css("border","0px");
                    $(this).css("border","1px solid #000"); 
                    $(this).bind("contextmenu", function(ev){
                             ev.preventDefault();
                             //console.log(this);
                             console.log($(this).text());
                             return false;   
                         });
                    },
        function() { $(this).css("border","0px");
                      $(this).unbind("contextmenu");
                    }
    );

    $("img").hover(
        function() { $(this).css("border","1px solid #000"); },
        function() { $(this).css("border","0px"); }
    );

}


//table.Hover { border: 1px solid #000; }


//$("div").hover(
//    function() { $(this).addClass("Hover"); },
//    function() { $(this).removeClass("Hover"); }
//);


