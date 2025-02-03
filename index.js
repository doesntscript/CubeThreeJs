
// 1. Scene . 2 Mesh(Obejects) 3. Camera 4. Renderer

// Scene
const scene = new THREE.Scene(); 

// Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1); 
const material = new THREE.MeshBasicMaterial({color: "yellow"});
const mesh = new THREE.Mesh(geometry, material);

// Position (X , Y, Z)
// mesh.position.x = 1;
// mesh.position.y = -0.5;
// mesh.position.z = 1;

// Scale
// mesh.scale.x = 0.5;
// mesh.scale.y = 1.7; 
// mesh.scale.set(0.5 , 1.7);  

// Rotation 
// mesh.rotation.x = Math.PI * 0.25;

// scene.add(mesh);

const geometryT = new THREE.BoxGeometry(1, 1, 1); 
const materialT = new THREE.MeshBasicMaterial({color: "blue"});
const meshT = new THREE.Mesh(geometryT, materialT);

// Posicionando a meshT
meshT.position.y = 2;

// Criando um grupo e adicionando meshT
const Group = new THREE.Group();
Group.add(mesh, meshT);
Group.position.x = 1;
Group.position.y = -1;

// Adicionando o grupo à cena
scene.add(Group);

// scene.add(meshT);


// AxesHelper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper); 



// Camera
const aspect = {
    width: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height ) // near value is 1 , and for value is 2000


// Position (X , Y, Z)
camera.position.z = 4; 



scene.add(camera)

// Renderer
const canvas = document.querySelector(".draw"); // slect the canvas element
const rederer = new THREE.WebGLRenderer({ canvas }); // add the WebGLRenderer
rederer.setSize( aspect.width, aspect.height); // Rederer size
rederer.render(scene, camera); // display what the camera in the scene patured