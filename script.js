$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
            console.log("Hello");
        } else{
            $('.navbar').removeClass("sticky");
        }
    })
})