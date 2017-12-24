
var animalPix = ["pic1","pic1","pic2","pic2","pic3","pic3","pic4","pic4","pic5","pic5","pic6","pic6"];

shuffleArray();

var selectClass = document.getElementsByClassName("backsidePic");

for(var i = 0; i < animalPix.length; i++){
    selectClass[i].className = animalPix[i] + " " + selectClass[i].className;
    selectClass[i].addEventListener("click", flip)
}

function shuffleArray() {
    for (var i = 0; i < animalPix.length; i++) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = animalPix[i];
        animalPix[i] = animalPix[j];
        animalPix[j] = temp;
    }
}

function flip(){
    this.className = this.className.substring(0, this.className.indexOf("backside"));
}



