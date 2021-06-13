const origData = {
        "tech-support": {
            "name": "Tech Support Scam",
            "title": "Your PC has a virus!",
            "desc": "We have detected a virus on your pc!!",
            "opt-1": "Call the number",
            "opt-2": "Close the tab"
        },
        "fake-download": {
            "name": "Fake Download Virus",
            "title": "Your PC is unprotected!",
            "desc": "Your PC could be attacked at ANYTIME!",
            "opt-1": "Call the number",
            "opt-2": "Close the tab"
        },
        "Cookies": {
            "name": "Cookie Prompt",
            "title": "Accept Cookies to continue reading",
            "desc": "In order for you to continue reading you must accept cookies, otherwise we will close this tab.",
            "opt-1": "Call the number",
            "opt-2": "Close the tab"        
        }
    };

var items_left = origData;
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

    console.log(document.getElementById("p-title").innerHTML);
    console.log(origData);

    setup_popup();
};

function off() {
    document.getElementById("popup").style.display = "none";
};

function setup_popup() {
    var keys = Object.keys(items_left);
    var key_index = Math.floor(Math.random() * keys.length);
    var rando_key = keys[key_index];
    details = items_left[rando_key];
    delete items_left[rando_key];
}
setup_popup();


/*var element = document.getElementById("page");
    var orig_content = element.innnerHTML;
    var orig_css = element.style;
    element.innerHTML = "YOU FOOL!!";
    element.setAttribute("style", "font-size: 100px; font-style: bold; color: white; text-align: center; height: 100vh; display: flex; justify-content: center; align-items: center;");*/