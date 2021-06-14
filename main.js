var origData = {
		"tech-support": {
			"name": "Tech Support Scam",
			"title": "Your PC has a virus!",
			"desc": "We have detected a virus on your pc!! Please call our certified windows support technician at: 1300-847-827. This is an URGENT issue, immediate action is required or else your PC will be shutdown! (5 minute countdown with a loud voice saying: URGENT)",
			"opt-1": "Call the number",
			"opt-2": "Close the tab/popup",
			"correct": 2,
			"feedback": "This type of popup is nothing more than an ad, and is known as a tech support or remote access scam. If you encounter this should take a picture, close the tab/window/popup, and if the page you were visting is a sketchy one don't revisit it. Send the details of the encounter to https://www.scamwatch.gov.au/report-a-scam or https://www.econsumer.gov/#crnt (if you are outside australia). <br><br>The way this scam works is that someone makes an ad/popup that tricks the target into thinking they have to contact the number and get a problem resolved, the people you call pretend to be from a large company, and will get you to allow them access to your PC claiming it is a 'secure server link' or the sorts. From here they will convince you that you do indeed have the problem and it needs resolving. They may then either 'fix' your PC, charging you upwards of a few hundred dollars, or install malicious content, they may even do both. <br><br>Variations: pretending to be a notification from a service like amazon, your bank, etc (further explained in another question). It may also simply have a link to some software for you to download that will 'clean' your PC but this is actually malicious content itself."
		},
		
			"fake-download": {
			"name": "Fake Download Virus",
			"title": "Your PC is unprotected!",
			"desc": "Your PC could be attacked at ANYTIME!! You may even have malware on your PC right now! Download our software here (sketchy link) to remove any viruses you may have and protect yourself in the future! Out software is 100% FREE!!",
			"opt-1": "Click the link and download the software",
			"opt-2": "Close the tab/popup",
			"correct": 2,
			"feedback": "This scam works by getting the user to download some program, it pretends that it will keep you safe from malicious software, but in fact it is malicious itself. If you see this scam you should simply close the tab/window/popup. You should only be downloading trusted known antivirus software, and when doing so either make sure you get it from the official website of said software (e.g. Only download AVG antivirus from avg.com), or get a trusted company (such as JB-Hi-FI) to install it for you and give you an expert recommendation on what one you should get. <br><br>The scam works by getting you to buy a fake copy of a legitiment piece of software, that will actually turn out to be a virus. It may also require you to pay for it, it may say that it's on sale and is really cheap, or have a cost to 'unlock' certain features. <br><br>Variations: it may pretend to be a free version of a game, it may have a link to their 'online scanner' which will inform you that you do indeed have malware and need to call their tech support or download their antivirus software (it is impossible to scan a PC properly from a website)"
		},
		
			"Cookies": {
			"name": "Cookie Prompt",
			"title": "Accept Cookies to continue reading",
			"desc": "In order for you to continue reading you must accept cookies, otherwise we will close this tab. We use cookies in order to delivier content customised for you, as well as vital functions of our site.",
			"opt-1": "Turn off your pc and cut your internet connection",
			"opt-2": "Press 'acccept cookies'",
			"correct": 2,
			"feedback": "Despite the fact this may seem like a scam or virus, 'cookies' are a completly safe. All they are is a text file on your browser that the website can access later to get information about you. Only the website that made the set of cookies may access and alter it. Despite it sounding like it may store sensitive info, cookies only contains info that the website put there. These are actually an inportant part of a website, imagine you are using YouTube in your PC browser, if you didnt have cookies then every time you opened a new tab you would need to login again. The cookies for youtube contains your user ID cookie, which is the authentication token your PC sends to infrom sites like YouTube who you are. <br><br>The only thing clicking 'accept cookies' does is let the website manage a cookie file, which only contains info it provides (it cannot rip info off your pc), this is normally a perfectly fine thing to do. The only downside can be that you may get ads targeted towards you, but this helps the website opperate and run, and ultimately whether you accept cookies or not is up to you. <br><br>Variations: some sites may request you to disable ad-block, however most will just say this as a friendly request and you can normally just close the popup."
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
