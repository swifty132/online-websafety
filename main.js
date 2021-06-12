const popData = {
        "tech-support": {
            "name": "Tech Support Scam",
            "title": "Your PC has a virus!",
            "description": "A virus on your pc.."
        }
    };

var details = popData;

function pressedButton() {
    //alert("MUWHAHAHAHA")
    on();
};

function on() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("p-title").innerHTML = popData[1]["title"];
    console.log(document.getElementById("p-title").innerHTML);
    console.log(popData);
};

function off() {
    document.getElementById("popup").style.display = "none";
};



/*var element = document.getElementById("page");
    var orig_content = element.innnerHTML;
    var orig_css = element.style;
    element.innerHTML = "YOU FOOL!!";
    element.setAttribute("style", "font-size: 100px; font-style: bold; color: white; text-align: center; height: 100vh; display: flex; justify-content: center; align-items: center;");*/