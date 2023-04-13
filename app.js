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

window.onload = () => switchPage(location.pathname)
addEventListener('popstate', () => switchPage(location.pathname))

function switchPage(route){

    scrollTo(0, 0)

    if (route === '/index' || route === '/' || route === '/history-api/') {
        renderParent({ numeration: 0, iconClass: 0 }, { numeration: 1, iconClass: 1 });
    }
    if (route === '/about') {
        renderParent({ numeration: 1, iconClass: 1 }, { numeration: 2, iconClass: 2 });
    }
    if (route === '/portfolio') {
        renderParent({ numeration: 2, iconClass: 2 }, { numeration: 3, iconClass: 3 });
    }
    if (route === '/contact') {
        renderParent({ numeration: 3, iconClass: 3 }, null);
    }

}

function pushPage(nextPage){
    
    if (nextPage.numeration === 1) {
        history.pushState(nextPage, '', '/about');
        setPageTitle(1)
    }
    
    if (nextPage.numeration === 2) {
        history.pushState(nextPage, '', '/portfolio');
        setPageTitle(2)
    }

    if (nextPage.numeration === 3) {
        history.pushState(nextPage, '', '/contact');
        setPageTitle(3)
    }

}

function setPageTitle(num){
    if (num === 0) document.title = titles[0]
    if (num === 1) document.title = titles[1]
    if (num === 2) document.title = titles[2]
    if (num === 3) document.title = titles[3]
}

function renderParent(currPage, nextPage){
    setPageTitle(currPage.numeration)

    if (document.querySelector('.page-container').innerHTML.length > 0) {
        document.querySelector('.page-container').innerHTML = ''
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
            pushPage(nextPage)
            if (nextPage === null || nextPage.numeration > 3) return;
            renderParent(nextPage, { numeration: nextPage.numeration + 1, iconClass: nextPage.iconClass + 1 });
            icon.style.pointerEvents = 'none';
        };
    }

    if (currPage.numeration > 0 && currPage.iconClass > 0) {
        let back = document.createElement('i');
        back.className = 'fa-solid fa-arrow-right-to-bracket back-link';
        back.onclick = () => {
            history.back()
        };
        parent.appendChild(back);
    }

    if (currPage.numeration === 0 && currPage.iconClass === 0) Home.loadHomepage(parent);

    if (currPage.numeration === 1 && currPage.iconClass === 1) About.loadAbout(parent);

    if (currPage.numeration === 2 && currPage.iconClass === 2) Portfolio.loadPortfolio(parent);

    if (currPage.numeration === 3 && currPage.iconClass === 3) Contact.loadContact(parent);

};