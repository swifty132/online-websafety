var origData = {
		"tech-support": {
			"name": "Tech Support Scam",
			"title": "Your PC has a virus!",
			"desc": "We have detected a virus on your pc!! Please call our certified windows support technician at: 1300-847-827. This is an URGENT issue, immediate action is required or else your PC will be shutdown! (5 minute countdown with a loud voice saying: URGENT)",
			"opt-1": "Call the number",
			"opt-2": "Close the tab",
			"correct": 2,
			"feedback": "This type of popup is nothing more than an ad, and is known as a tech support or remote access scam. If you encounter this should take a picture, close the tab/window, and if the page you were visting is a sketchy one don't revisit it. Send the details of the encounter to https://www.scamwatch.gov.au/report-a-scam or https://www.econsumer.gov/#crnt (if you are outside australia). <br><br> The way this scam works is that someone makes an ad/popup that tricks the target into thinking they have to contact the number and get a problem resolved, the people you call pretend to be from a large company, and will get you to allow them access to your PC claiming it is a 'secure server link' or the sorts. From here they will convince you that you do indeed have the problem and it needs resolving. They may then either 'fix' your PC, charging you upwards of a few hundred dollars, or install malicious content, they may even do both. <br><br> Variations: pretending to be a notification from a service like amazon, your bank, etc (further explained in another question). It may also simply have a link to some software for you to download that will 'clean' your PC but this is actually malicious content itself.
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

var keys = Object.keys(items_left);
var key_index = Math.floor(Math.random() * keys.length);
var rando_key = keys[key_index];
details = items_left[rando_key];
delete items_left[rando_key];
