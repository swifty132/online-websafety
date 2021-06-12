const popData = {
        "tech-support": {
            "name": "Tech Support Scam",
            "title": "Your PC has a virus!",
            "description": "A virus on your pc.."
        },
        "jeff": {
            "name": "Tech Support Scam",
            "title": "heya!",
            "description": "A virus on your pc.."
        },
        "bob": {
            "name": "Tech Support Scam",
            "title": "sup",
            "description": "A virus on your pc.."
        }
    };

var items_left = popData;
var details;

function pressedButton() {
    //alert("MUWHAHAHAHA")
    on();
};

function on() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("p-title").innerHTML = details["title"];
    console.log(document.getElementById("p-title").innerHTML);
    console.log(popData);
    setup_popup();
};

function off() {
    document.getElementById("popup").style.display = "none";
};

function setup_popup() {
    var keys = Object.keys(items_left);
    var key_index = Math.floor(Math.random() * keys.length);
    var rando_key = keys[key_index]
    details = items_left[rando_key];
}
setup_popup();


/*var element = document.getElementById("page");
    var orig_content = element.innnerHTML;
    var orig_css = element.style;
    element.innerHTML = "YOU FOOL!!";
    element.setAttribute("style", "font-size: 100px; font-style: bold; color: white; text-align: center; height: 100vh; display: flex; justify-content: center; align-items: center;");*/