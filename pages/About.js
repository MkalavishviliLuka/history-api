export const About = {
    fadeElement: [],

    icons: [
        ["/public/html.png"],
        ["/public/css.png", "/public/tailwind.png", "/public/bootstrap.png"],
        [
            "/public/js.png",
            // "/public/electron.png",
            "/public/react.png",
            "/public/next.png",
            // "/public/redux.png",
            "/public/jquery.png",
            // "/public/angular.png",
            // "/public/angular-u.png",
            // "/public/vue.png",
        ],
        // ["/public/wp.png", "/public/ps.png"],
        ["/public/wp.png"],
        ["/public/git.png"],
        ["/public/phs.png", "/public/il.png"],
    ],

    gifs: [
        { parent: ".work-img", src: "/public/work-gif.gif" },
        { parent: ".technologies-img", src: "/public/technologies-gif.gif" },
        { parent: ".mains-img", src: "/public/mains-gif.gif" },
    ],

    loadAbout(parent) {
        parent.style.paddingTop = "120px";

        let aboutContainer = document.createElement("div");
        aboutContainer.className = "about-container";

        let aboutHeading = document.createElement("h1");
        aboutHeading.textContent = "About";
        aboutContainer.appendChild(aboutHeading);

        // First

        let aboutWelcome = document.createElement("div");
        aboutWelcome.className = "section-wrapper about-welcome";

        let aboutWelcomeLeft = document.createElement("div");
        aboutWelcomeLeft.className = "wrapper-left";

        let firstLeftHeading = document.createElement("h2");
        firstLeftHeading.textContent = "Hi there,";
        firstLeftHeading.className = "fade-element glitch-text";
        aboutWelcomeLeft.appendChild(firstLeftHeading);
        this.fadeElement.push(firstLeftHeading);

        let firstLeftSubHeading = document.createElement("h4");
        firstLeftSubHeading.textContent = "Nice to see you 🍻";
        firstLeftSubHeading.className = "fade-element";
        aboutWelcomeLeft.appendChild(firstLeftSubHeading);
        this.fadeElement.push(firstLeftSubHeading);

        aboutWelcome.appendChild(aboutWelcomeLeft);

        let aboutWelcomeRight = document.createElement("div");
        aboutWelcomeRight.className = "wrapper-right";
        aboutWelcome.appendChild(aboutWelcomeRight);

        let firstRightHeading = document.createElement("h2");
        firstRightHeading.textContent = "<LetMe />";
        firstRightHeading.className = "fade-element";
        aboutWelcomeRight.appendChild(firstRightHeading);
        this.fadeElement.push(firstRightHeading);

        let firstRightSubHeading = document.createElement("h4");
        firstRightSubHeading.textContent = "Introduce myself";
        firstRightSubHeading.className = "fade-element";
        aboutWelcomeRight.appendChild(firstRightSubHeading);
        this.fadeElement.push(firstRightSubHeading);

        let musicSuggest = document.createElement("p");
        musicSuggest.textContent =
            "*Meanwhile you can listen Rolling Stones introducing himself";
        musicSuggest.className = "fade-element";
        aboutWelcomeRight.appendChild(musicSuggest);
        this.fadeElement.push(musicSuggest);

        if (!document.querySelector(".audio-toggler")) {
            let playIcon = document.createElement("i");
            playIcon.className = "fa-solid fa-circle-play fade-element";

            playIcon.onclick = () => {
                playIcon.remove();
                this.loadMusic();
            };

            musicSuggest.appendChild(playIcon);
            this.fadeElement.push(playIcon);
        }

        // Second

        let aboutSkills = document.createElement("div");
        aboutSkills.className = "section-wrapper about-skills";

        let aboutSkillsHeading = document.createElement("h2");
        aboutSkillsHeading.className = "section-heading fade-element";
        aboutSkillsHeading.textContent = "Skills";
        this.fadeElement.push(aboutSkillsHeading);
        aboutSkills.appendChild(aboutSkillsHeading);

        let aboutSkillsIntro = document.createElement("p");
        aboutSkillsIntro.className = "section-intro fade-element";
        aboutSkillsIntro.innerHTML =
            "I've <span class='work-img'>worked / trained</span> with <span  class='technologies-img'>different technologies</span>, but mostly on <span  class='mains-img'>React.js and Vanilla Javascript.</span>";
        this.fadeElement.push(aboutSkillsIntro);
        aboutSkills.appendChild(aboutSkillsIntro);

        this.icons.forEach((iconSet) => {
            let iconSetHolder = document.createElement("div");
            iconSetHolder.className = "icon-holder fade-element";

            iconSet.forEach((icon) => {
                let img = document.createElement("img");
                img.className = "icon-img";
                img.src = icon;
                iconSetHolder.appendChild(img);
            });
            this.fadeElement.push(iconSetHolder);
            aboutSkills.appendChild(iconSetHolder);
        });

        const parentObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                entry.isIntersecting
                    ? entry.target.classList.add("fade-in")
                    : "";
            });
        });

        this.fadeElement.forEach((item) => {
            parentObserver.observe(item);
        });

        aboutContainer.appendChild(aboutWelcome);
        aboutContainer.appendChild(aboutSkills);
        parent.appendChild(aboutContainer);

        this.gifs.forEach((gif, index) => {
            let workImg = document.createElement("img");
            workImg.src = gif.src;

            document.querySelector(gif.parent).appendChild(workImg);
        });
    },

    loadMusic() {
        let parent = document.body;

        let toggle = document.createElement("i");
        toggle.className = "audio-toggler fa-solid fa-pause";

        toggle.onclick = () => {
            if (toggle.classList.contains("fa-pause")) {
                toggle.classList.remove("fa-pause");
                toggle.classList.add("fa-circle-play");
                audio.pause();
            } else {
                toggle.classList.add("fa-pause");
                toggle.classList.remove("fa-circle-play");
                audio.play();
            }
        };
        parent.appendChild(toggle);

        let audio = document.createElement("audio");
        audio.src = "/public/intro.mp3";
        parent.appendChild(audio);
        audio.play();
    },
};
