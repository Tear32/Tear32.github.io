const textElement = document.getElementById('typewriter');
const nameOnly = "tear";        
const extension = ".wtf";      
const fullString = nameOnly + extension; 
const prefix = "@";

let index = 0;
let isDeleting = false;
let typeSpeed = 200;

function type() {
    const currentFull = fullString.substring(0, index);
    const currentName = currentFull.substring(0, nameOnly.length);
    textElement.innerHTML = prefix + currentName;

    document.title = prefix + currentFull;
    typeSpeed = isDeleting ? 100 : 200;
    if (!isDeleting && index === fullString.length) {
        isDeleting = true;
        typeSpeed = 2000; 
    } else if (isDeleting && index === 0) {
        isDeleting = false;
        typeSpeed = 500;
    }
    index = isDeleting ? index - 1 : index + 1;
    setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', type);