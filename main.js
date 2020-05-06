<<<<<<< Updated upstream
var percent, slider, output,clear,collapse;
var max = 100;

window.onload = function () {
    percent = document.getElementById("percentage");
    slider = document.getElementById("myRange");
    output = document.getElementById("output");
    clear = document.getElementById("clear");
    collapse = document.getElementById('collapse');
    percent.value = slider.value;


    slider.oninput = function () {
        percent.value = slider.value;
    }

    document.getElementById("setSpeed").addEventListener("click", function () {
        slider.value = percent.value;
        output.innerHTML += "Speed Set: " + slider.value + "%<br>";
        output.scrollTop = output.scrollHeight;
    });

    document.getElementById("kill").addEventListener("click", function () {
        slider.value = 0;
        percent.value = slider.value;
        output.innerHTML += "Speed Set: " + slider.value + "%<br>";
        output.scrollTop = output.scrollHeight;
    });

    clear.addEventListener("click", function () {
        output.innerHTML = "";
    });

    percent.addEventListener('input', function () {

        if (percent.value > max || percent.value < 0 || !isNumeric(percent.value)) {
            percent.style.color = "red";
        } else {
            percent.style.color = "black";
            slider.value = percent.value;
        }
    });

    this.percent.addEventListener('focusout', function () {
        if (!percent.value || percent.value > max || percent.value < 0 || !isNumeric(percent.value)){
            percent.value = 0;
            percent.style.color = "black";
            slider.value = percent.value;
        }
    });

    var outOpen = true;
    collapse.addEventListener('click',function (){
        let collapse = document.getElementById('collapse');
        let style = window.getComputedStyle(clear),
            top = style.getPropertyValue('top');
        
            

        if(outOpen){
            output.style.height = "7vh";
            if(top != "17px"){
                collapse.style.bottom = "1.2vh"
                clear.style.bottom = "1.5vh";
            }
            collapse.style.transform = "rotate(180deg)";
            outOpen = !outOpen;
        }else{
            output.style.height = "35vh";
            if(top != "17px"){
                collapse.style.bottom = "29.2vh"
                clear.style.bottom = "29.5vh";
            }
            collapse.style.transform = "rotate(0deg)";
            outOpen = !outOpen;
        }

        output.scrollTop = output.scrollHeight;

    });

}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
=======
var percent, slider,output;



window.onload = function(){

    percent = document.getElementById("percentage");

    slider = document.getElementById("myRange");

    output = document.getElementById("output");

    percent.innerHTML = slider.value;





    slider.oninput = function() {   

        percent.innerHTML = slider.value; 

    }



    document.getElementById("setSpeed").addEventListener("click", function(){

        output.innerHTML+= "Speed Set: " + slider.value + "%<br>";

        output.scrollTop = output.scrollHeight;

    });



    document.getElementById("kill").addEventListener("click", function(){

        slider.value = 0;

        percent.innerHTML = slider.value; 

        output.innerHTML+= "Speed Set: " + slider.value + "%<br>";

        output.scrollTop = output.scrollHeight;

    });



    document.getElementById("clear").addEventListener("click", function(){

        output.innerHTML = "";

        console.log("woking");

    });

}




>>>>>>> Stashed changes
