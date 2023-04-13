export const Home = {
    renderer: '',
    scene: '',
    camera: '',
    particle: '',
    animate: '',

    loadHomepage(parent) {
        parent.style.paddingTop = '0px'

        let heading = document.createElement('h1');
        heading.textContent = "Luka Mkalavishvili";
        parent.appendChild(heading);
    
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('0-page').appendChild(this.renderer.domElement);
    
        this.scene = new THREE.Scene();
    
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
        this.camera.position.z = 400;
        this.scene.add(this.camera);
        this.particle = new THREE.Object3D();
    
        this.scene.add(this.particle);
    
        var geometry = new THREE.TetrahedronGeometry(5, 0);
    
        var material = new THREE.MeshPhongMaterial({
            color: 0x967AA1,
            shading: THREE.FlatShading
        });
    
        for (var i = 0; i < 300; i++) {
            var mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
            mesh.position.multiplyScalar(90 + (Math.random() * 700));
            mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
            this.particle.add(mesh);
        }
        var ambientLight = new THREE.AmbientLight(0x999999);
        this.scene.add(ambientLight);
    
        var lights = [];
        lights[0] = new THREE.DirectionalLight(0x967AA1, 1);
        lights[0].position.set(1, 0, 0);
        lights[1] = new THREE.DirectionalLight(0x11E8BB, 1);
        lights[1].position.set(0.75, 1, 0.5);
        lights[2] = new THREE.DirectionalLight(0x8200C9, 1);
        lights[2].position.set(-0.75, -1, 0.5);
        this.scene.add(lights[0]);
        this.scene.add(lights[1]);
        this.scene.add(lights[2]);
        
        this.animate = () => {
            requestAnimationFrame(this.animate);
            this.particle.rotation.y -= 0.0025;
            this.renderer.clear();
            this.renderer.render(this.scene, this.camera);
        };
        this.animate();
    }
}