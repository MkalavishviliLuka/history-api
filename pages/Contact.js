export const Contact = {
    loadContact(parent) {
        parent.style.paddingTop = '120px'

        let contactContainer = document.createElement('div');
        contactContainer.className = 'contact-container';

        let contactHeading = document.createElement('h1')
        contactHeading.textContent = 'Contact'
        contactContainer.appendChild(contactHeading);
    
        parent.appendChild(contactContainer);
    }
}