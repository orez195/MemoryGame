var animalPix = ["pic1","pic1","pic2","pic2","pic3","pic3","pic4","pic4","pic5","pic5","pic6","pic6"];
var selectClass = document.getElementsByClassName("backsidePic");
var animalPixAndSelectClass;
var incorrectCounter = 0;
var correct = 0;
var current = [];

function shuffleArray() {
    for (var i = 0; i < animalPix.length; i++) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = animalPix[i];
        animalPix[i] = animalPix[j];
        animalPix[j] = temp;
    }
}

shuffleArray();

function removeBack() {
    for (var i=0; i < animalPix.length; i++) {
        animalPixAndSelectClass = animalPix[i] + " " + selectClass[i].className;
        selectClass[i].className = animalPixAndSelectClass;
        selectClass[i].addEventListener("click", flip);
    }
}

function flip() {
    current.push(this);
    if (current.length <= 2 && this.className.indexOf("backsidePic") >= 0) {
        this.className = this.className.substring(0, this.className.indexOf(" backsidePic"));
        setTimeout(checkMatch, 1000);
    } else if (current.length > 2) {
        alert("You must pick 2 cards at a time. This is your warning!");
        current.splice(2,current.length);
    }
}

function checkMatch() {
    if (current.length >= 2) {
        if (current[0].className == current[1].className) {
            current[0].className += " addFrame";
            current[1].className += " addFrame";
            current.splice(0,2);
            correct++;
            if (correct == 6) {
                winGame();
            }
        } else {
            current[0].className += " backsidePic";
            current[1].className += " backsidePic";
            current.splice(0,2);
            incorrectCounter++;
            document.getElementById("incorrect").innerHTML = "Incorrect: " + incorrectCounter;
        }
    }
}

function winGame() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("winGame").innerHTML = "Congratulations! You have won!";
    document.getElementById("reset").style.display= "block";
}

