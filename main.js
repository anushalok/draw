var width= screen.width;
if(width<992)
{
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_hieght;
    document.body.style.overflow = "hidden";
}

function my_touchstart(e)
{
    console.log("my_touchstart");
    
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

function my_touchmove(e)
{
    console.log("my_touchMove");
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordanites = ");
    console.log("x =" + last_position_of_x + "y =" + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    last_position_of_x = current_position_of_touch_x
    last_position_of_y = current_position_of_touch_y
}