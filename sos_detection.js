window.addEventListener("devicemotion", function(event) {
    let acceleration = event.accelerationIncludingGravity;

    if (
        acceleration.x > 20 ||
        acceleration.y > 20 ||
        acceleration.z > 20
    ) {
        triggerSOS();
    }
});

function triggerSOS() {
    alert("Emergency Detected!");

    sendAlertToDoctor();
    sendAlertToFamily();
    shareGPSLocation();
}

function sendAlertToDoctor() {
    console.log("Doctor alerted");
}

function sendAlertToFamily() {
    console.log("Family alerted");
}

function shareGPSLocation() {
    console.log("Live GPS shared");
}
