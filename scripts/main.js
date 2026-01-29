const music = document.getElementById('bg-music');
const enterScreen = document.getElementById('enter-screen');
music.volume = 0.009;

function copyToClipboard(address, element) {
    navigator.clipboard.writeText(address).then(() => {
        const status = element.querySelector('.copy-status');
        status.classList.add('show');
        setTimeout(() => {
            status.classList.remove('show');
        }, 1500);
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}


function startSite() {
    music.play().catch(err => console.log("Audio play failed:", err));
    enterScreen.classList.add('fade-out');
    if (typeof type === "function") type(); 
}
document.addEventListener('click', startMusic);