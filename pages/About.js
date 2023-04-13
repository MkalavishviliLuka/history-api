export const About = {
    loadAbout(parent) {
        let aboutContainer = document.createElement('div');
        aboutContainer.className = 'about-container';
        aboutContainer.textContent = 'About';
    
        parent.appendChild(aboutContainer);
    }
}