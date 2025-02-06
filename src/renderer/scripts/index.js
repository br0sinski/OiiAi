document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.getElementById('closeButton');
    const gifButton = document.getElementById('gifButton');
    const staticImage = gifButton.querySelector('img'); 
    const gifOverlay = gifButton.querySelector('.overlay img');

    gifButton.addEventListener('click', () => {
        staticImage.classList.add('hidden'); 
        gifOverlay.classList.remove('hidden'); 
        
        setTimeout(() => {
            gifOverlay.classList.add('hidden'); 
            staticImage.classList.remove('hidden'); 
        }, 3000);
    });

    closeButton.addEventListener('click', () => {
        window.electronAPI.closeApp();
    });
});