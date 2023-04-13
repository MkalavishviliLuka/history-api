import { Home } from "/pages/Home.js";
import { About } from "/pages/About.js";
import { Portfolio } from "/pages/Portfolio.js";
import { Contact } from "/pages/Contact.js";

const titles = [
    'Luka Mkalavishvili - Home', 
    'Luka Mkalavishvili - About', 
    'Luka Mkalavishvili - Portfolio', 
    'Luka Mkalavishvili - Contact'
]

window.onload = function () {
    if (location.pathname === '/index.html' || location.pathname === '/' || location.pathname === '/ap/') {
        renderParent({ numeration: 0, iconClass: 0 }, { numeration: 1, iconClass: 1 });
    }
    if (location.pathname === '/about.html') {
        renderParent({ numeration: 1, iconClass: 1 }, { numeration: 2, iconClass: 2 });
    }
    if (location.pathname === '/portfolio.html') {
        renderParent({ numeration: 2, iconClass: 2 }, { numeration: 3, iconClass: 3 });
    }
    if (location.pathname === '/contact.html') {
        renderParent({ numeration: 3, iconClass: 3 }, null);
    }
};

var renderParent = (currPage, nextPage) => {
    if (document.querySelector('.page-container').innerHTML.length > 0) {
        document.querySelector('.page-container').innerHTML = ''
    }


    if (currPage.numeration === 0) {
        history.pushState(nextPage, '', '/');
        document.title = titles[0]
    }
    
    if (currPage.numeration === 1) {
        history.pushState(nextPage, '', '/about');
        document.title = titles[1]
    }
    
    if (currPage.numeration === 2) {
        history.pushState(nextPage, '', '/portfolio');
        document.title = titles[2]
    }

    if (currPage.numeration === 3) {
        history.pushState(nextPage, '', '/contact');
        document.title = titles[3]
    }


    let parent = document.querySelector('.page-container');
    parent.style.pointerEvents = 'none';
    setTimeout(() => {
        parent.style.pointerEvents = 'unset';
    }, 300);

    currPage.numeration > 0 ? parent.classList.add('secondary-page') : parent.classList.remove('secondary-page');

    parent.setAttribute('id', `${currPage.numeration}-page`);

    if(currPage.numeration < 3 && currPage.iconClass < 3){
        let icon = document.createElement('i');
        icon.className = 'fa-solid fa-door-open page-link';
        parent.appendChild(icon);
        icon.onclick = () => {
            if (nextPage === null || nextPage.numeration > 3) return;
            renderParent(nextPage, { numeration: nextPage.numeration + 1, iconClass: nextPage.iconClass + 1 });
            icon.style.pointerEvents = 'none';
            icon.onclick = () => { };
        };
    }

    if (currPage.numeration > 0 && currPage.iconClass > 0) {
        let back = document.createElement('i');
        back.className = 'fa-solid fa-arrow-right-to-bracket back-link';
        back.onclick = () => {
            renderParent({ numeration: currPage.numeration - 1, iconClass: currPage.iconClass - 1 }, currPage);
        };
        parent.appendChild(back);
    }

    const parentObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scale-up');
            }
        });
    });

    parentObserver.observe(parent);

    if (currPage.numeration === 0 && currPage.iconClass === 0) Home.loadHomepage(parent);

    if (currPage.numeration === 1 && currPage.iconClass === 1) About.loadAbout(parent);

    if (currPage.numeration === 2 && currPage.iconClass === 2) Portfolio.loadPortfolio(parent);

    if (currPage.numeration === 3 && currPage.iconClass === 3) Contact.loadContact(parent);
};