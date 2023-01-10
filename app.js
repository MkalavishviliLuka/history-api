var renderer, scene, camera, particle;
var animate;

window.onload = function () {
    if (location.pathname === '/index.html' || location.pathname === '/') {
        renderParent({ numeration: 0, iconClass: 0 }, { numeration: 1, iconClass: 1 });
    }
    if (location.pathname === '/about') {
        renderParent({ numeration: 1, iconClass: 1 }, { numeration: 2, iconClass: 2 });
    }
    if (location.pathname === '/portfolio') {
        renderParent({ numeration: 2, iconClass: 2 }, { numeration: 3, iconClass: 3 });
    }
    if (location.pathname === '/contact') {
        renderParent({ numeration: 3, iconClass: 3 }, null);
    }
};

var renderParent = (currPage, nextPage) => {
    if (document.querySelector('.page-container')) {
        document.querySelector('.page-container').classList.add('scale-fade');
        setTimeout(() => {
            document.querySelector('.page-container').remove();
        }, 300);
    }


    if (currPage.numeration === 0) {
        history.pushState(nextPage, '', '/');
    }
    if (currPage.numeration === 1) {
        history.pushState(nextPage, '', '/about');
    }
    if (currPage.numeration === 2) {
        history.pushState(nextPage, '', '/portfolio');
    }
    if (currPage.numeration === 3) {
        history.pushState(nextPage, '', '/contact');
    }


    let parent = document.createElement('div');
    parent.style.pointerEvents = 'none';
    setTimeout(() => {
        parent.style.pointerEvents = 'unset';
    }, 300);
    parent.className = 'page-container';
    parent.setAttribute('id', `${currPage.numeration}-page`);

    let icon = document.createElement('i');
    // if (currPage.iconClass === 0) {
    icon.className = 'fa-solid fa-door-open page-link';
    parent.appendChild(icon);
    // }
    icon.onclick = () => {
        if (nextPage === null || nextPage.numeration > 3) return;
        renderParent(nextPage, { numeration: nextPage.numeration + 1, iconClass: nextPage.iconClass + 1 });
        icon.style.pointerEvents = 'none';
        icon.onclick = () => { };
    };

    let back = document.createElement('i');
    back.className = 'fa-solid fa-arrow-right-to-bracket back-link';
    back.onclick = () => {
        renderParent({ numeration: currPage.numeration - 1, iconClass: currPage.iconClass - 1 }, currPage);
    };

    if (currPage.numeration > 0 && currPage.iconClass > 0) {
        parent.appendChild(back);
    }

    document.body.appendChild(parent);

    const parentObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scale-up');
            }
        });
    });

    parentObserver.observe(parent);

    if (currPage.numeration === 0 && currPage.iconClass === 0) {
        loadHomepage(parent);
        animate = () => {
            requestAnimationFrame(animate);
            particle.rotation.y -= 0.0010;
            renderer.clear();

            renderer.render(scene, camera);
        };
        animate();
    }

    if (currPage.numeration === 1 && currPage.iconClass === 1) {
        loadAbout(parent);
    }

    if (currPage.numeration === 2 && currPage.iconClass === 2) {
        loadPortfolio(parent);
    }

    if (currPage.numeration === 3 && currPage.iconClass === 3) {
        loadContact(parent);
    }
};

function loadHomepage(parent) {
    let heading = document.createElement('h1');
    heading.textContent = "Luka Mkalavishvili";
    parent.appendChild(heading);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('0-page').appendChild(renderer.domElement);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 400;
    scene.add(camera);
    particle = new THREE.Object3D();

    scene.add(particle);

    var geometry = new THREE.TetrahedronGeometry(2, 0);

    var material = new THREE.MeshPhongMaterial({
        color: 0x967AA1,
        shading: THREE.FlatShading
    });

    for (var i = 0; i < 1000; i++) {
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
        mesh.position.multiplyScalar(90 + (Math.random() * 700));
        mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
        particle.add(mesh);
    }
    var ambientLight = new THREE.AmbientLight(0x999999);
    scene.add(ambientLight);

    var lights = [];
    lights[0] = new THREE.DirectionalLight(0x967AA1, 1);
    lights[0].position.set(1, 0, 0);
    lights[1] = new THREE.DirectionalLight(0x11E8BB, 1);
    lights[1].position.set(0.75, 1, 0.5);
    lights[2] = new THREE.DirectionalLight(0x8200C9, 1);
    lights[2].position.set(-0.75, -1, 0.5);
    scene.add(lights[0]);
    scene.add(lights[1]);
    scene.add(lights[2]);

};

function loadAbout(parent) {
    let comicsContainer = document.createElement('div');
    comicsContainer.className = 'comics-container';
    comicsContainer.textContent = 'About';

    parent.appendChild(comicsContainer);
}

function loadPortfolio(parent) {
    let comicsContainer = document.createElement('div');
    comicsContainer.className = 'comics-container';
    comicsContainer.textContent = 'Portfolio';

    parent.appendChild(comicsContainer);
}

function loadContact(parent) {
    let comicsContainer = document.createElement('div');
    comicsContainer.className = 'comics-container';
    comicsContainer.textContent = 'Contact';

    parent.appendChild(comicsContainer);
}