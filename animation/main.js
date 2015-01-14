function listener(e) {
    var l = document.createElement("li");
    switch(e.type) {
        case "animationstart":
            l.innerHTML = "Started: elapsed time is " + e.elapsedTime;
            break;
        case "animationend":
            l.innerHTML = "Ended: elapsed time is " + e.elapsedTime;
            break;
        case "animationiteration":
            l.innerHTML = "New loop started at time " + e.elapsedTime;
            break;

        case "webkitAnimationStart":
            l.innerHTML = "Started: elapsed time is " + e.elapsedTime;
            break;
        case "webkitAnimationEnd":
            l.innerHTML = "Ended: elapsed time is " + e.elapsedTime;
            break;
        case "webkitAnimationIteration":
            l.innerHTML = "New loop started at time " + e.elapsedTime;
            break; 
    }
    document.getElementById("output").appendChild(l);
}

function setup() {
    var e = document.getElementById("watchme");
    e.addEventListener("animationstart", listener, false);
    e.addEventListener("animationend", listener, false);
    e.addEventListener("animationiteration", listener, false);

    e.addEventListener("webkitAnimationStart", listener, false);
    e.addEventListener("webkitAnimationEnd", listener, false);
    e.addEventListener("webkitAnimationIteration", listener, false);
     
    e.className = "slidein";
}
