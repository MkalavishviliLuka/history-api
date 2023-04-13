export const About = {
    scaleELements: [],

    loadAbout(parent) {
        parent.style.paddingTop = '120px'

        let aboutContainer = document.createElement('div');
        aboutContainer.className = 'about-container';

        let aboutHeading = document.createElement('h1')
        aboutHeading.textContent = 'About'
        aboutContainer.appendChild(aboutHeading);

        // First 

        let aboutWelcome = document.createElement('div')
        aboutWelcome.className = 'section-wrapper about-welcome'

        let aboutWelcomeLeft = document.createElement('div')
        aboutWelcomeLeft.className = 'wrapper-left'

        let firstLeftHeading = document.createElement('h2')
        firstLeftHeading.textContent = 'Hi there,'
        firstLeftHeading.className = 'fade-element'
        aboutWelcomeLeft.appendChild(firstLeftHeading)
        this.scaleELements.push(firstLeftHeading)

        let firstLeftSubHeading = document.createElement('h4')
        firstLeftSubHeading.textContent = 'Nice to see you 🍻'
        firstLeftSubHeading.className = 'fade-element'
        aboutWelcomeLeft.appendChild(firstLeftSubHeading)
        this.scaleELements.push(firstLeftSubHeading)

        aboutWelcome.appendChild(aboutWelcomeLeft)

        let aboutWelcomeRight = document.createElement('div')
        aboutWelcomeRight.className = 'wrapper-right'
        aboutWelcome.appendChild(aboutWelcomeRight)

        let firstRightHeading = document.createElement('h2')
        firstRightHeading.textContent = 'Let me'
        firstRightHeading.className = 'fade-element'
        aboutWelcomeRight.appendChild(firstRightHeading)
        this.scaleELements.push(firstRightHeading)

        let firstRightSubHeading = document.createElement('h4')
        firstRightSubHeading.textContent = 'Introduce myself'
        firstRightSubHeading.className = 'fade-element'
        aboutWelcomeRight.appendChild(firstRightSubHeading)
        this.scaleELements.push(firstRightSubHeading)

        let musicSuggest = document.createElement('p')
        musicSuggest.textContent = '*Meanwhile you can listen Rolling Stones introducing himself'
        musicSuggest.className = 'fade-element'
        aboutWelcomeRight.appendChild(musicSuggest)
        this.scaleELements.push(musicSuggest)

        if(!document.querySelector('.audio-toggler')){
            let playIcon = document.createElement('i')
            playIcon.className = 'fa-solid fa-circle-play fade-element'

            playIcon.onclick = ()=>{
                playIcon.remove()
                this.loadMusic()
            }

            musicSuggest.appendChild(playIcon)
            this.scaleELements.push(playIcon)
        }

        // Second
        
        let aboutSkills = document.createElement('div')
        aboutSkills.className = 'section-wrapper about-skills'

        let aboutSkillsHeading = document.createElement('h2')
        aboutSkillsHeading.className = 'section-heading fade-element'
        aboutSkillsHeading.textContent = 'Skills'
        this.scaleELements.push(aboutSkillsHeading)
        aboutSkills.appendChild(aboutSkillsHeading)

        let aboutSkillsIntro = document.createElement('p')
        aboutSkillsIntro.className = 'section-intro fade-element'
        aboutSkillsIntro.textContent = '//In skills section you will see skills'
        this.scaleELements.push(aboutSkillsIntro)
        aboutSkills.appendChild(aboutSkillsIntro)

    
        const parentObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                entry.isIntersecting ? entry.target.classList.add('fade-in') : entry.target.classList.remove('fade-in');
            });
        });

        this.scaleELements.forEach(item => {
            parentObserver.observe(item);
        })

        aboutContainer.appendChild(aboutWelcome)
        aboutContainer.appendChild(aboutSkills)
        parent.appendChild(aboutContainer);
    },

    loadMusic(){
        let parent = document.body

        let toggle = document.createElement('i')
        toggle.className = 'audio-toggler fa-solid fa-pause'

        toggle.onclick = ()=>{
            if(toggle.classList.contains('fa-pause')) {
                toggle.classList.remove('fa-pause')
                toggle.classList.add('fa-circle-play')
                audio.pause()
            }else{
                toggle.classList.add('fa-pause')
                toggle.classList.remove('fa-circle-play')
                audio.play()
            }
        }
        parent.appendChild(toggle)

        let audio = document.createElement('audio')
        audio.src = '/public/intro.mp3'
        parent.appendChild(audio)
        audio.play()
    }
}