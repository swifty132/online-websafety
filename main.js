const xhttp = new XMLHttpRequest();
var origData;
var items_left;
var details;

/*
"key": {
		"name": "name",
		"title": "title",
		"desc": "desc",
		"opt-1": "choice",
		"opt-2": "choice",
		"correct": 12,
		"feedback": "feedback"
	}*/

function pressedButton() {
    document.getElementById("but1").style.visibility = "hidden";
    
    setTimeout(function() {
        show_pop();
    }, 2000)
    
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
        setTimeout(function() {
            show_pop();
        }, Math.floor(Math.random() * 7000) + 3000)
    }
    else {
        restart_promp();
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
}

function resume() {
    document.getElementById("feedback").style.display = "none";
    setup_popup();
}

function restart_promp() {
    document.getElementById("reset").style.display = "block";
}

function reset() {
    items_left = Object.assign({},origData);
    document.getElementById("reset").style.display = "none";
    var keys = Object.keys(items_left);
    var key_index = Math.floor(Math.random() * keys.length);
    var rando_key = keys[key_index];
    details = items_left[rando_key];
    delete items_left[rando_key];
    document.getElementById("but1").style.visibility = "visible";
}

// Define a callback function
xhttp.onload = function() {
    var tempData;
    tempData = JSON.parse(xhttp.responseText);
    origData = Object.assign({},tempData);
    start();
}

// Send a request
xhttp.open("GET", "popups.json", true);
xhttp.send();


function start() {
    items_left = Object.assign({},origData);

    var keys = Object.keys(items_left);
    var key_index = Math.floor(Math.random() * keys.length);
    var rando_key = keys[key_index];
    details = items_left[rando_key];
    delete items_left[rando_key];
}
