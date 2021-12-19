
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;

    document.getElementById("afterSubmit").style.visibility = "visible";
	if (question1 == "RAM" && question2 == "HDD" && question3 == "Mouse") {
        document.getElementById("message").style.color = "green";
        document.getElementById("afterSubmit").style.visibility = "visible";
        document.getElementById("message").innerHTML = "You should study Computer Science";
        document.getElementById("picture").src = "./IMG/thumbsUp.jpg";;
    }
    else{
        document.getElementById("afterSubmit").style.visibility = "visible";
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerHTML = "Please DO NOT study Computer Science";
        document.getElementById("picture").src = "./IMG/thumbsDown.jpg";
    }
	
	}
