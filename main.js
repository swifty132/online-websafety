var origData = {
        "tech-support": {
            "name": "Tech Support Scam",
            "title": "Your PC has a virus!",
            "desc": "We have detected a virus on your pc!!",
            "opt-1": "Call the number",
            "opt-2": "Close the tab",
            "correct": 2,
            "feedback": "this type of scam"
        },
        "fake-download": {
            "name": "Fake Download Virus",
            "title": "Your PC is unprotected!",
            "desc": "Your PC could be attacked at ANYTIME!",
            "opt-1": "Call the number",
            "opt-2": "Close the tab",
            "correct": 2,
            "feedback": "this type of scam"
        },
        "Cookies": {
            "name": "Cookie Prompt",
            "title": "Accept Cookies to continue reading",
            "desc": "In order for you to continue reading you must accept cookies, otherwise we will close this tab.",
            "opt-1": "Call the number",
            "opt-2": "Close the tab",
            "correct": 2,
            "feedback": "this type of scam"
        }
    };

var items_left = Object.assign({},origData);
var details;

function pressedButton() {
    //alert("MUWHAHAHAHA")
    on();
};

function on() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("p-title").innerHTML = details["title"];
    document.getElementById("p-desc").innerHTML = details["desc"];
    document.getElementById("opt-1").innerHTML = details["opt-1"];
    document.getElementById("opt-2").innerHTML = details["opt-2"];

    setup_popup();
};

function off() {
    document.getElementById("popup").style.display = "none";
};

function setup_popup() {
    console.log(origData)
    console.log(items_left)
    var keys = Object.keys(items_left);
    console.log(keys.length)
    if (keys.length > 0) {
        console.log("new");
        var key_index = Math.floor(Math.random() * keys.length);
        var rando_key = keys[key_index];
        details = items_left[rando_key];
        delete items_left[rando_key];
        console.log(origData)
        console.log(items_left)
    }
    else {
        console.log("reset");
        items_left = Object.assign({},origData);
    }
}

function opt_pressed(id) {
    //console.log(id);
    off();
}

function resume() {
    
}
setup_popup();


/*var element = document.getElementById("page");
    var orig_content = element.innnerHTML;
    var orig_css = element.style;
    element.innerHTML = "YOU FOOL!!";
    element.setAttribute("style", "font-size: 100px; font-style: bold; color: white; text-align: center; height: 100vh; display: flex; justify-content: center; align-items: center;");*/