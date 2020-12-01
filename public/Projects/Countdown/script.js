var newDate = document.getElementById("newdate");
var textname = document.getElementById("text")


var currentDate = -1;

function deleteThis(){
    
}

function submitdate(){




    if (newDate.value ) {

        currentDate++;

        var date = new Date(newDate.value).getTime();
        var newname;

        newname = textname.value;
    
        var ul = document.querySelector("ul");
        var newLi = document.createElement("li");
        var newDiv = document.createElement("div");
        ul.appendChild(newLi);
        newLi.appendChild(newDiv);
        

    
        newLi.classList.add("countdown");
    
        var x = setInterval(function() {
    
            var now = new Date().getTime();
            var distance = date - now;
    
            var d = Math.floor(distance / (1000 * 60 * 60 * 24));
            var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var s = Math.floor((distance % (1000 * 60)) / 1000);
            
            newDiv.innerHTML = 
        "<div id=\"cdcont\"><div>"+ newname +"</div><div><span>Days<div class=\"days\">"+ d +"</div></span><span>Hours<div class=\"hours\">"+h+"</div></span><span>Minutes<div class=\"minutes\">"+m+"</div></span><span>Seconds<div class=\"seconds\">"+s+"</div></span> </div> "


    
        })
    
    
    }


    }
