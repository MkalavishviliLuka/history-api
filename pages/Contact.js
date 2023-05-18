export const Contact = {
    inputs: [
        'name',
        'email',
        'number',
    ],
    
    loadContact(parent) {
        parent.style.paddingTop = '120px'

        let contactContainer = document.createElement('div');
        contactContainer.className = 'contact-container';

        let contactHeading = document.createElement('h1')
        contactHeading.textContent = 'Contact'
        contactContainer.appendChild(contactHeading);

        let form = document.createElement('form')

        this.inputs.forEach(input => {
            let container = document.createElement('div')

            let inputElement = document.createElement('input')
            inputElement.type = input
            inputElement.id = `input-${input}`

            let inputLabel = document.createElement('label')
            inputLabel.setAttribute('for', `input-${input}`)

            if(input === 'name') inputLabel.textContent = 'Full name'
            if(input === 'email') inputLabel.textContent = 'E-mail'
            if(input === 'number') inputLabel.textContent = 'Number'

            inputElement.placeholder = ' '

            inputElement.required = true
            container.appendChild(inputElement)
            container.appendChild(inputLabel)
            form.appendChild(container)
        })

        let container = document.createElement('div')

        let inputLabel = document.createElement('label')
        inputLabel.textContent = 'Message'
        inputLabel.setAttribute('for', `input-message`)

        let message = document.createElement('textarea')
        message.placeholder = ' '
        message.id = `input-message`

        container.appendChild(message)
        container.appendChild(inputLabel)

        let submit = document.createElement('button')
        submit.textContent = 'Launch 🚀'
        container.appendChild(submit)

        form.onsubmit = (e) => {
            e.preventDefault()
            alert('Submit')
        }

        form.appendChild(container)

        contactContainer.appendChild(form)
    
        parent.appendChild(contactContainer);
    }
}