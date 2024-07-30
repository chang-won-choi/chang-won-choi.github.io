function showDetails(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var canvas1 = document.getElementById('canvas1');
    var canvas2 = document.getElementById('canvas2');
    drawCircle(canvas1);
    drawCircle(canvas2);
});

function drawCircle(canvas) {
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(100, 100, 50, 0, Math.PI * 2, true);
        ctx.fillStyle = 'lightblue';
        ctx.fill();
    }
}