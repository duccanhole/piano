//declare sound
var noteA = new sound("filemp3/A.mp3"),
    noteB = new sound("filemp3/B.mp3"),
    noteC = new sound("filemp3/C.mp3"),
    noteD = new sound("filemp3/D.mp3"),
    noteE = new sound("filemp3/E.mp3"),
    noteF = new sound("filemp3/F.mp3"),
    noteG = new sound("filemp3/G.mp3"),
    noteAa = new sound("filemp3/Aa.mp3"),
    noteAb = new sound("filemp3/A-sharp.mp3"),
    noteBb = new sound("filemp3/C-sharp.mp3"),
    noteDb = new sound("filemp3/D-sharp.mp3"),
    noteEb = new sound("filemp3/F-sharp.mp3"),
    noteGb = new sound("filemp3/G-sharp.mp3");
//define obj tag audio html 5   
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";   
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.load();
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}
//add keyboard event key press
var id;
window.addEventListener("keydown",function(event){
    switch(event.key){
        case 'a': id='a';break;
        case 's': id='b';break;
        case 'd': id='c';break;
        case 'f': id='d';break;
        case 'j': id='e';break;
        case 'k': id='f';break;
        case 'l': id='g';break;
        case ';': id='aA';break;
        case '1': id='Aa';break;
        case '2': id='Bb';break;
        case '3': id='Cc';break;
        case '8': id='Dd';break;
        case '9': id='Ee';break;
        default: id="";
    }
    document.getElementById(id).click();
    document.getElementById(id).style.fontSize = "small";
    document.getElementById(id).style.width = "30px";
    document.getElementById(id).style.height = "50px";
})
window.addEventListener("keyup",function(event){
    document.getElementById(id).style.fontSize = "medium";
    document.getElementById(id).style.width = "40px";
    document.getElementById(id).style.height = "60px";
})
//add function when click a button
function a(){noteA.play()}
function b(){noteB.play()}
function c(){noteC.play()}
function d(){noteD.play()}
function e(){noteE.play()}
function f(){noteF.play()}
function g(){noteG.play()}
function aA(){noteAa.play()}
function Aa(){noteAb.play()}
function Bb(){noteBb.play()}
function Cc(){noteDb.play()}
function Dd(){noteEb.play()}
function Ee(){noteGb.play()}
function aS(){noteA.stop()}




