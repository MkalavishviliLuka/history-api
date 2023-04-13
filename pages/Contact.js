export const Contact = {
    loadContact(parent) {
        let contactContainer = document.createElement('div');
        contactContainer.className = 'contact-container';
        contactContainer.textContent = 'Contact';
    
        parent.appendChild(contactContainer);
    }
}