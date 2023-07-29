var randomNumber = Math.random();
var randomNumber2 = Math.random()
var n = Math.floor((randomNumber * 6) + 1);
var n1 = Math.floor((randomNumber2 * 6) + 1);

var randomImage = "dice" + n + ".png";
var imageSource = "./images/" + randomImage;
var img = document.querySelectorAll("img")[0];

img.setAttribute('src',imageSource);

var randomImage1 = "dice" + n1 + ".png";
var imageSource1= "./images/" + randomImage1;

var img1 = document.querySelectorAll("img")[1];
img1.setAttribute('src',imageSource1);

if(n>n1){
    document.querySelector("h1").innerHTML = "player 1 wins"
}else if(n<n1){
    document.querySelector("h1").innerHTML = "player 2 wins"
}else{
    document.querySelector("h1").innerHTML = "Draw!"
}