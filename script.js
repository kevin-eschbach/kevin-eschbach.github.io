$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
            console.log("Hello");
        } else{
            $('.navbar').removeClass("sticky");
        }
    })
});

$(document).addEventListener('DOMContentLoaded', function(event){
    var textData = ["Student", "Social Democrat", "Software Developer"];

    function typewriter(text, i, fncCallback){
        if(i < text.length){
            document.querySelector("#what-am-i").innerHTML = text.substring(0, i+1);
            setTimeout(function() {
                typewriter(text, i+1, fncCallback)
            }, 100);
        }
        else if (typeof fncCallback == 'function'){
            setTimeout(fncCallback, 700);
        }
    }

    function startTextAnimation(i) {
        if(i < textData.length){
            typewriter(textData[i], 0, function(){
                startTextAnimation(i+1);
            });
        } else {
            setTimeout(function(){
                startTextAnimation(0);
            }, 20000);
        }
    }

    startTextAnimation(0)
});