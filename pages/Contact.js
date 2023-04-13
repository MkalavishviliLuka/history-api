export const Contact = {
    loadContact(parent) {
        let contactContainer = document.createElement('div');
        contactContainer.className = 'contact-container';

        let contactHeading = document.createElement('h1')
        contactHeading.textContent = 'Contact'
        contactContainer.appendChild(contactHeading);
    
        parent.appendChild(contactContainer);
    }
}