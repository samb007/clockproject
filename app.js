const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");



function clock(){
var date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();


let hourPosition = hour*360/12 + ((minute * 360/60)/12);
let minutePosition = (minute * 360/60) + (second* 360/60)/60;
let secondPosition = second * 360/60;

hourHand.style.transform = "rotate("+hourPosition+"deg)";
minuteHand.style.transform = "rotate("+minutePosition+"deg)";
secondHand.style.transform = "rotate("+secondPosition+"deg)";


}

function digitalClock(){
    var date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    
    

document.getElementById("digitalClock").innerHTML = 
 digit(hour) + ":" + digit(minute) + ":" + digit(second);


function digit(number) {
  if (number < 10) {
    number = "0"+ number;
  }
  return number;
}   

}
let interval2 = setInterval(digitalClock, 1000);  


let interval = setInterval(clock, 1000);