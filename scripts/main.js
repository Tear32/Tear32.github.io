
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


