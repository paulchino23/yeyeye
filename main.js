canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="dark blue";
var mouse_event="empty";
var last_position_of_x,last_position_of_y;
canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
mouse_x=e.clientX-canvas.offsetLeft;
mouse_y=e.clientY-canvas.offsetTop;

if (mouse_event=="mouseDown"){


ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.moveTo(last_position_of_x,last_position_of_y);
ctx.lineTo(mouse_x,mouse_y);
ctx.stroke();
}
last_position_of_x=mouse_x;
last_position_of_y=mouse_y;
}
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
mouse_event="mouseDown";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouse_event="mouseleave";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouse_event="mouseUP";
}