
const canvas = document.getElementById("simCanvas");
// getContext = what drawing tools to use, use 2d
const ctx = canvas.getContext("2d");
const colorInput = document.getElementById("colorPicker");

function drawCircle(x, y, radius, color) {
    // Start a fresh path. Do not connect this shape to an older one.
    ctx.beginPath(); 
    // circular path, parameters: x pos, y pos, radius, start angle, end angle
    // pi is 180 degrees
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    
    ctx.fillStyle = color;
    ctx.fill();
}

// input event is whenever the value changes
colorInput.addEventListener("input", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle(400, 250, 30, colorInput.value);
});

drawCircle(400, 250, 30, colorInput.value);
