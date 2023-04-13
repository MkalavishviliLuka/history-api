export const About = {
    loadAbout(parent) {
        let aboutContainer = document.createElement('div');
        aboutContainer.className = 'about-container';

        let aboutHeading = document.createElement('h1')
        aboutHeading.textContent = 'About'
        aboutContainer.appendChild(aboutHeading);
    
        parent.appendChild(aboutContainer);
    }
}