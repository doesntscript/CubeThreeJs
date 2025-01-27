
// 1. Scene . 2 Mesh(Obejects) 3. Camera 4. Renderer




// Scene
const scene = new THREE.Scene(); 

// Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1); 
const material = new THREE.MeshBasicMaterial({color: "purple"});
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);


// Camera
const aspect = {
    width: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height ) // near value is 1 , and for value is 2000
camera.position.z = 4; 
camera.position.x = 1;
camera.position.y = -0.5;

scene.add(camera)

// Renderer
const canvas = document.querySelector(".draw"); // slect the canvas element
const rederer = new THREE.WebGLRenderer({ canvas }); // add the WebGLRenderer
rederer.setSize( aspect.width, aspect.height); // Rederer size
rederer.render(scene, camera); // display what the camera in the scene patured