const contextMenu = document.querySelector('#context-menu ul');



document.addEventListener('contextmenu' , (event) => {
    // Disable Right Click Menu
    event.preventDefault();

    const {clientX : c, clientY : y} = event;

    // Check Which Menu is Opened

    contextMenu.style.display = 'block';
    contextMenu.style.left = c + 'px'; 
    contextMenu.style.top = y + 'px'; 
    
})


// Refresh Icon
contextMenu.querySelector('li.refresh').addEventListener('click' , () => {
    // Refresh Page
    window.location.reload();
})


// Inspect Icon
// contextMenu.querySelector('li.inspect').addEventListener('click' , () => {
//     // Open Developer Tools
//     window.open('about:blank');
//     setTimeout(() => {
//         const devTools = window.devtools.panels.elements;
//         devTools.open();
//     }, 100);
// })

document.addEventListener('click' , e => {
    // Close Context Menu When Clicked Elsewhere
    if (!contextMenu.contains(e.target)) {
        contextMenu.style.display = 'none';
    }
})
// lis.forEach((li) => {
//     li.addEventListener('mouseenter', () => {
//         li.querySelector('lord-icon').hover(true)
        
//     });

//     li.addEventListener('mouseleave', () => {
//         // Remove Class Hover To Li
//         li.classList.remove('hover');
//     });
// });

function log(text) {
    console.log(text);
}