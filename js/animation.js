document.addEventListener("scroll", function(e){

    landingpage_blur();
    navbar_follow();


    function navbar_follow(){
        if(window.innerWidth > 700){
            console.log(window.scrollY +" " + -window.screenY/2)
            if(window.scrollY >= -window.screenY/2){
                document.getElementById("navbar").style.display = "flex";
            }else{
                document.getElementById("navbar").style.display = "none";
            }
        }
    }

    function landingpage_blur(){
        let lp = document.getElementById("landingpage");

        let b = -(window.scrollY*12/(window.screenY));

        if(b > 1.5){
            b = 1.5;
        }

        lp.style.filter = "blur(" + b + "px)";
    }
})


setTimeout(function(){
    document.getElementById("navbar-btt").addEventListener("click", function(ev){
        document.getElementById("navbar").style.display = "flex";
        document.getElementById("navbar-btt").style.display = "none";
    })
    document.getElementById("navbar").addEventListener("click", function(e){
        document.getElementById("navbar").style.display = "none";
        document.getElementById("navbar-btt").style.display = "flex";
    })
}, 1);
    