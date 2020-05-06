var percent, slider, output;
var max = 100;

window.onload = function () {
    percent = document.getElementById("percentage");
    slider = document.getElementById("myRange");
    output = document.getElementById("output");
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

    document.getElementById("clear").addEventListener("click", function () {
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

}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }