if (document.title === "Into_Cyberspace | Home" && window.screen.width >= 992){
    window.onscroll = function() {scrollFunction()};
} else {
    window.onscroll = function() {scrollFunction()};
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("navbar").style.backgroundColor = "#e37575";
        if (window.screen.width >= 992){
            document.getElementById("navbar-right").style.marginTop = "1%";
            document.getElementById("navbar-right").style.marginBottom = "1%";
        }
    } else {
        document.getElementById("navbar").style.backgroundColor = "transparent";
        if (window.screen.width >= 992){
            document.getElementById("navbar-right").style.marginTop = "3%";
            document.getElementById("navbar-right").style.marginBottom = "3%";
        }
    }
}  