// Write your JavaScript code here.
// Remember to pay attention to page loading!

document.addEventListener("DOMContentLoaded", function() {
    const takeOff = document.getElementById("takeoff");
    const land = document.getElementById("landing");
    const abort = document.getElementById("missionAbort");
    let flightStatus = document.getElementById("flightStatus");
    let shutBackground = document.getElementById("shuttleBackground");
    let shutHeight = document.getElementById("spaceShuttleHeight");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    let rocket = document.getElementById("rocket");
    rocket.style.position = "absolute";
    rocket.style.left = "110px";
    rocket.style.bottom = "0px";

    //Event Listeners
    takeOff.addEventListener("click", function() {
        let confirm = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (confirm === true) {
            flightStatus.textContent = 'Shuttle in flight';
            shutBackground.style.backgroundColor = 'blue';
            shutHeight.innerHTML = parseInt(shutHeight.innerHTML) + 10000;
        }
    });

    land.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.textContent = 'The shuttle has landed';
        shutBackground.style.backgroundColor = 'green';
        shutHeight.innerHTML = 0;
        rocket.style.left = "110px";
        rocket.style.bottom = "0px";
    });

    abort.addEventListener("click", function() {
        let confirm = window.confirm("Confirm that you want to abort the mission.");
        if (confirm === true) {
            flightStatus.textContent = 'Mission aborted';
            shutBackground.style.backgroundColor = 'green';
            shutHeight.innerHTML = 0;
            rocket.style.left = "110px";
            rocket.style.bottom = "0px";
        }
    });

    up.addEventListener("click", function() {
        if (parseInt(rocket.style.bottom) >= 0 && parseInt(rocket.style.bottom) < 240) {
            rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";
        }
        shutHeight.innerHTML = parseInt(shutHeight.innerHTML) + 10;
    });

    down.addEventListener("click", function() {
        if (parseInt(rocket.style.bottom) > 0 && parseInt(rocket.style.bottom) <= 240) {
            rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + "px";
            if (parseInt(shutHeight.innerHTML) > 0) {
                shutHeight.innerHTML = parseInt(shutHeight.innerHTML) - 10;
            }
        }
    });

    left.addEventListener("click", function() {  
        if (parseInt(rocket.style.left) > 0 && parseInt(rocket.style.left) <= 220) {
            rocket.style.left = parseInt(rocket.style.left) - 10 + "px";
        }
    });

    right.addEventListener("click", function() {
        if (parseInt(rocket.style.left) >= 0 && parseInt(rocket.style.left) < 220) {
            rocket.style.left = parseInt(rocket.style.left) + 10 + "px";
        }
    });

});