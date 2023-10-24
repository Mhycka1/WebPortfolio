alert("script.js loaded!")

let varName = 30;

if(varName > 10){
    alert("greater")
}else{
    alert("less")
}

let coolList = [
    3, 5, 7, 9,
    4, 6, 6, 45,
]

coolList.push(60);

//hides things by putting it in the console?
console.log(coolList);

function greetPerson(name){
    return "Hello " + name;
}

let titleElement = document.getElementById("title");

function changeTitle(){
    titleElement.innerText = "wow javascript!";
    titleElement.style.color = "red";
}

setTimeout(changeTitle, 1000);

let clickMeBtn = document.getElementById("clickMe")

clickMeBtn.addEventListener("click", changeTitle);


