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
    show_pop();
};

function show_pop() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("p-title").innerHTML = details["title"];
    document.getElementById("p-desc").innerHTML = details["desc"];
    document.getElementById("opt-1").innerHTML = details["opt-1"];
    document.getElementById("opt-2").innerHTML = details["opt-2"];
};

function hide_pop() {
    document.getElementById("popup").style.display = "none";
};

function setup_popup() {
    var keys = Object.keys(items_left);
    if (keys.length > 0) {
        var key_index = Math.floor(Math.random() * keys.length);
        var rando_key = keys[key_index];
        details = items_left[rando_key];
        delete items_left[rando_key];
    }
    else {
        items_left = Object.assign({},origData);
    }
}

function opt_pressed(id) {
    feedback_screen(id);
    hide_pop();
}

function feedback_screen(id) {
    var feedback_el = document.getElementById("feedback");
    
    if (id == details["correct"]) {
        document.getElementById("f-title").innerHTML = "Correct!";
        feedback_el.style.cssText = feedback_el.style.cssText + "background-color: darkgreen;";
    }
    else {
        document.getElementById("f-title").innerHTML = "Wrong.. <br>Better luck next time!";
        feedback_el.style.cssText = feedback_el.style.cssText + "background-color: darkred;";
    }
    document.getElementById("f-desc").innerHTML = details["feedback"];
    feedback_el.style.display = "block";
    setup_popup();
}

function resume() {
    document.getElementById("feedback").style.display = "none";
}
setup_popup();


/*var element = document.getElementById("page");
    var orig_content = element.innnerHTML;
    var orig_css = element.style;
    element.innerHTML = "YOU FOOL!!";
    element.setAttribute("style", "font-size: 100px; font-style: bold; color: white; text-align: center; height: 100vh; display: flex; justify-content: center; align-items: center;");*/