var welcome = document.getElementById("welcome").classList;
var logo = document.getElementsByClassName("biglogo")[0].classList;
var myName = document.getElementById("myName").classList;
var about = document.getElementById("about");
function startUp() {
    window.scroll({
        top:0,
    })
    welcome.remove("hide");
    welcome.add("appear");
    setTimeout(function(){
        welcome.add("hide");
        logo.remove("hide");
        logo.add("appear")
        setTimeout(function(){
            logo.add("hide");
            myName.remove("hide");
            myName.add("appear")
            setTimeout(function(){
                window.scroll({
                    top: about.offsetTop, 
                    left: 0, 
                    behavior: 'smooth'
                  });
                  document.querySelector("html").classList.remove("noscroll");
                  setTimeout(function(){
                    logo.remove("hide");
                    myName.remove("hide");
                    logo.remove("appear");
                    myName.remove("appear");
                  },500)
            },3200)
        },3200)
    },3200)
}

startUp()