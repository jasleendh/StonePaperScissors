/*
 * rps.js: January 2017
 * Name: Jasleen Dhillon
 * Assignment: Assignment 3
 * Date: July 3 2020
 */

// DON'T TOUCH, Just Read  --------------
// array of moves/ids
var pics = ["rock", "paper", "scissors"];
// load the page elements
document.addEventListener("DOMContentLoaded", init, false);

//array to display results
var results = ["You Win!", "You Lose!", "It's a Tie!"];
//Declaring variables to use in updating the score
var compScore = 0;
var playerScore = 0;

//this function consist of html elements required
function init() {
    var container = document.getElementById('img-container');

    //header
    var header = document.createElement("header")
    var h1el = document.createElement("h1");
    h1el.textContent = 'Play Rock, Paper, Scissors!';
    header.appendChild(h1el);
    document.body.insertBefore(header, container);

    //game-header
    var gameHeader = document.createElement("div");
    gameHeader.className = 'game-header';
    gameHeader.textContent = 'Choose your method of destruction:';
    document.body.insertBefore(gameHeader, container);

    //images
    for (var i = 0; i < 3; i++) {
        var img = document.createElement("img");
        img.className = "rps-img no-img-border";
        img.src = "images/" + pics[i] + ".png";
        img.id = pics[i];
        img - container.appendChild(img);
        //adding event listener
        img.addEventListener("click", move);
    }

    //2nd game- header
    gameHeader = document.createElement("div");
    gameHeader.className = 'game-header';
    gameHeader.textContent = 'The computer chooses:';
    document.body.appendChild(gameHeader);

    //table
    var table = document.createElement("table");
    document.body.append(table);
    var tr = document.createElement("tr");
    table.appendChild(tr);
    var td = document.createElement("td");
    tr.appendChild(td);

    //computer image
    var compImg = document.createElement("img");

    //giving id and class attribute to computer image
    compImg.className = "rps-img";
    compImg.setAttribute("id", "comp-img");
    td.appendChild(compImg);

    //creating another td element for score board
    td = document.createElement("td");
    td.className = 'vert-center';
    tr.appendChild(td);
    var divEl = document.createElement("div");
    divEl.setAttribute("id", "output");
    td.appendChild(divEl);

    //score board
    var divEl2 = document.createElement("div");
    divEl2.setAttribute("id", "score");
    document.body.appendChild(divEl2);
    var score = document.createElement("div");
    score.textContent = 'Score: ';
    divEl2.appendChild(score);

    //user score
    var userScore = document.createElement("div");
    userScore.textContent = 'You: ';
    divEl2.appendChild(userScore);
    var span = document.createElement("span");
    span.setAttribute("id", "user-score");
    userScore.appendChild(span);

    //computer score
    var compScore = document.createElement("div");
    compScore.textContent = 'Computer: ';
    divEl2.appendChild(compScore);
    span = document.createElement("span");
    span.setAttribute("id", "comp-score");
    compScore.appendChild(span);

    //footer
    var footer = document.createElement("footer");
    footer.textContent = "Copyright  © 2017 Wendi Jollymore";
    document.body.appendChild(footer);
}

//this function generate computer move
function getComputerMove() {
    //generating random number for computer image
    var randomNum = parseInt(0 + Math.random() * 3);

    //if statements to generate a certain image as computer move at particular random number
    if (randomNum == 0) {
        document.getElementById("comp-img").src = "images/" + pics[0] + ".png";
    }

    if (randomNum == 1) {
        document.getElementById("comp-img").src = "images/" + pics[1] + ".png";
    }

    if (randomNum == 2) {
        document.getElementById("comp-img").src = "images/" + pics[2] + ".png";
    }

    return randomNum;
}

//this function is used to generate one iteration of move
//event handler
function move(event) {
    //getting computer's move
    var compMove = getComputerMove();

    //get elements which have "img-border" class
    var border = document.getElementsByClassName("img-border")
    for (var i = 0; i < border.length; i++) {
        //turn off the border on all images
        border[i].className = "rps-img no-img-border";
    }

    //turn on the border on image which is clicked
    this.className = "rps-img img-border";
    var playerMove = pics.indexOf(this.id);

    //if statements to compare the moves of computer and player
    //if computer and player choose same thing display is a tie
    if (compMove == playerMove){
        playerScore = playerScore - 0;
        compScore = compScore - 0;

        document.getElementById("output").textContent = results[2];

    }
    //this gives an additional score to player and display winning message
    else if (playerMove == 0 && compMove == 2 || playerMove == 1 && compMove == 0 || playerMove == 2 && compMove == 1) {
        document.getElementById("user-score").textContent = ++playerScore;
        document.getElementById("output").textContent = results[0];
    }
    //this gives an additional score to computer and display losing message
    else {
        document.getElementById("comp-score").textContent = ++compScore;
        document.getElementById("output").textContent = results[1];
    }

}