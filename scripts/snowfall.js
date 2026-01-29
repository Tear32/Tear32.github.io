const canvas = document.getElementById('snow-canvas');
const ctx = canvas.getContext('2d');

let width, height, flakes = [];

function init() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    
    flakes = [];
    for (let i = 0; i < 120; i++) { 
        flakes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            s: Math.random() * 2 + 1, 
            d: Math.random() * 1 + 0.5, 
            drift: Math.random() * 0.5 - 0.25 
        });
    }
}

function draw() {
    ctx.clearRect(0, 0, width, height);
    flakes.forEach(f => {
        ctx.beginPath();
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
        ctx.arc(f.x, f.y, f.s, 0, Math.PI * 2);
        ctx.fill();
    });
    update();
}

function update() {
    for (let i = 0; i < flakes.length; i++) {
        let f = flakes[i];
        f.y += f.d;
        f.x += f.drift;
        
        if (f.y > height) {
            f.y = -10;
            f.x = Math.random() * width;
        }
    }
    requestAnimationFrame(draw);
}
window.addEventListener('resize', init);
init();
draw();