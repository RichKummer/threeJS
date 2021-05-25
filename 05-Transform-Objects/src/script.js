import './style.css'
import * as THREE from 'three'

console.log('hello Three.js');

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)


// Positioning an object
//mesh.position.x = 0.7
//mesh.position.y = -0.6
//mesh.position.z = 1
// mesh.position.set(0.7, -0.6, 1)

// Scaling an object
// mesh.scale.x = 2
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5
// mesh.scale.set(2, 0.5, 0.5)

// Rotating an object - the rotation property
// Rotation goes by default in the x, y and z order
// Can use reorder(...) method to change the above order. Must happen before changing the rotation
// mesh.rotation.reorder('YXZ')
// mesh.rotation.x = Math.PI * 0.25
// mesh.rotation.y = Math.PI * 0.25
// mesh.rotation.z = 0.5

// Creating a group to be transformed together
const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0x6158eb})
)

group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0xf78ae0})
)
cube2.position.x = 2

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0xe1dcf9})
)
cube3.position.x = -2

group.add(cube1)
group.add(cube2)
group.add(cube3)

group.position.y = 1
group.scale.y = 2
group.rotation.y = 0.3


// Rotating the object - the quarternion method
// It is harder to imagine than rotation. When you update rotation it updates quartenion and vice versa

/**
 * Axes Helper
 */
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)
// camera.lookAt(mesh.position)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)