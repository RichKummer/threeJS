import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// * Cursor *
// Listen for mouse coordinates on the page
const cursor = {
    x: 0,
    y: 0
}
window.addEventListener('mousemove', (event) =>
{
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = - (event.clientY / sizes.height - 0.5)

    console.log(cursor.x, cursor.y)
})

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Scene
const scene = new THREE.Scene()

// Object
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
scene.add(mesh)

// Camera
// Perspective Camera can take four params: 1. Vertical field of view as degrees (usually do something between 45 and 75), 2. Aspect ration (width of render divided by height of the render), 3. Near - how close (if object is closer than this, it will not show up), 4. Far - how far the camera can see (if object is further, it will not show up)
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)


// Orthographic Camera takes how far camera can see in each direction (left, right, top, bottom), then Near and Far.
// const aspectRatio = sizes.width / sizes.height;
// console.log(aspectRatio);
// const camera = new THREE.OrthographicCamera(
//     - 1 * aspectRatio, 
//     1 * aspectRatio, 1, 
//     - 1, 
//     0.1, 
//     100
// )
// camera.position.x = 2
// camera.position.y = 2
camera.position.z = 3
console.log(camera.position.length());
camera.lookAt(mesh.position)
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Animate
const clock = new THREE.Clock()

// Create OrbitControls -  need to pass in camera and canvas (from the DOM)
const controls = new OrbitControls(camera, canvas)
// Add damping to smooth the camera speed
controls.enableDamping = true

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    //mesh.rotation.y = elapsedTime;

    //Update the camera
    // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 2
    // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 2
    // camera.position.y = cursor.y * 3
    // camera.lookAt(mesh.position)

    // Update controls so damping works
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()