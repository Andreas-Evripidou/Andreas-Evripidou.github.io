var today = new Date();
var hour = today.getHours();
var greeting = "";

if (hour < 12) {
    greeting = "Good morning!"
}
else if (hour < 18) {
    greeting = "Good afternoon!"
}        
else {
    greeting = "Good evening!"
}
element = document.getElementById('greeting');
element.textContent= greeting;