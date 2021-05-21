console.log(THREE);

// Create a scene - a container you put objects, etc in
const scene = new THREE.Scene()



//Create Objects - can be many things (primitive geometries, particles, lights, etc.)
//Create Purple Cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({color: 0x6158eb })
const mesh = new THREE.Mesh(geometry, material)

//Add to the scene
scene.add(mesh)

//Create camera. Needs two parameters: a field of view (75 degree angle) and aspect ratio
const sizes = {
    width: 800,
    height: 600
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

//Create renderer - scene from camera point of view and drawn into canvas
const canvas = document.querySelector('.webgl')

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)

