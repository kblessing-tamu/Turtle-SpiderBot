var percent, slider, output, clear, collapse;
var max = 100;

window.onload = function () {
    var inc1 = document.getElementById("inc1");
    percent = document.getElementById("percentage");
    slider = document.getElementById("myRange");
    output = document.getElementById("outputtext");
    clear = document.getElementById("clear");
    collapse = document.getElementById('collapse');
    percent.value = slider.value;
    var hint = this.document.getElementById("hint");
    var addInterval = document.getElementById("addInterval");

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
        if (!percent.value || percent.value > max || percent.value < 0 || !isNumeric(percent.value)) {
            percent.value = 0;
            percent.style.color = "black";
            slider.value = percent.value;
        }
    });

    var outOpen = true;
    collapse.addEventListener('click', function () {
        let collapse = document.getElementById('collapse');
        let style = window.getComputedStyle(clear),
            top = style.getPropertyValue('top');
        console.log(top);

        let win = document.getElementById("output");
        if (outOpen) {
            win.style.height = "7vh";

            if (top != "17px") {
                collapse.style.bottom = "1.2vh"
                clear.style.bottom = "1.5vh";
            }
            collapse.style.transform = "rotate(0deg)";
            hint.innerHTML = "Open Prompt";
            outOpen = !outOpen;
        } else {
            win.style.height = "35vh";
            if (top != "17px") {
                collapse.style.bottom = "29.2vh"
                clear.style.bottom = "29.5vh";
            }
            hint.innerHTML = "Close Prompt";
            collapse.style.transform = "rotate(180deg)";
            outOpen = !outOpen;
        }

        win.scrollTop = win.scrollHeight;

    });



    inc1.addEventListener('click', function () {
        if (percent.value < 100) {
            percent.value++;
            slider.value = percent.value;
        }
    });

    document.getElementById("dec1").addEventListener('click', function () {
        if (percent.value > 0) {
            percent.value--;
            slider.value = percent.value;
        }
    });

    document.getElementById("inc5").addEventListener('click', function () {
        slider.value = parseInt(slider.value) + 5;
        percent.value = slider.value;
    });

    document.getElementById("dec5").addEventListener('click', function () {
        slider.value = parseInt(slider.value) - 5;
        percent.value = slider.value;
    });

    addInterval.addEventListener('click', function () {
        let btns = document.getElementsByClassName('speed');
            
        for(let i = 2;i>=1;i--){
            console.log(btns[i].innerText);
            btns[i].innerHTML = btns[i-1].innerHTML;
            //btns[i] = btns[i-1];
            //font-size: 18px;
            //font-weight: 800;
        }
        btns[0].style.fontSize = "18px";
        btns[0].style.fontWeight = "800";
        console.log(btns[0]);
        btns[0].innerText = percent.value+'%';
    });

    for (var i = 1; i <= 3; i++) {
        let intervalBtn = document.getElementById('intervalBtn' + i);

        intervalBtn.addEventListener('click', function (event) {
            slider.value = parseInt(intervalBtn.innerText);
            percent.value = slider.value;
        });
    }

}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}