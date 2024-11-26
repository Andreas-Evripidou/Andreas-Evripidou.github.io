const today = new Date();
const hour = today.getHours();

function setGreetingString() {
    let element = document.getElementById('greeting');
    
    if (hour < 12) {
       element.textContent = "Good morning!";
    }
    else if (hour < 18) {
        element.textContent=  "Good afternoon!";
    }
    element.textContent = "Good evening!";
}

function setCurrentYear() {
    const year = today.getFullYear();
    let  element = document.getElementById('currentYear');
    element.textContent = year;
    console.log(year);
}

setGreetingString();
setCurrentYear();