canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var mouseEvent= "empty";
var last_position_of_x;
var last_position_of_y;
var color= "black";
var width_of_line= 1;

console.log("i am checking 1");

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;

    mouseEvent = "mouseDown";
}
console.log("i am checking 2");

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseleave"
}
console.log("i am checking 3");

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseUP"
}
console.log("i am checking 4 [final check] ");

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){

    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y= e.clientY - canvas.offsetTop;
    console.log("i am checking 5 " + mouseEvent);
    if (mouseEvent == "mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y );
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x = " + current_position_of_x + "y = " + current_position_of_y );
    ctx.lineTo(current_position_of_x, current_position_of_y);
    ctx.stroke();
    }

    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;
}
