import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { AnimationMixer } from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function SceneLogo() {
    const mountRef = useRef(null);

    useEffect(() => {

        /* SETUP */

        let mixer; // 
        const clock = new THREE.Clock(); // used to control the animation ticks
        const loader = new GLTFLoader(); // needed to load the model 
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        var handleWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.render(scene, camera);
        }

        window.addEventListener("resize", handleWindowResize);

        camera.position.x = 0.035;
        camera.position.y = 0.1;
        camera.position.z = 0.3;

        /* SETUP */

        /* LIGHTS */

        const light = new THREE.AmbientLight('white', 0.3);
        scene.add(light);

        /* LIGHTS */

        /* MODELS */

        loader.load(
            'models/gltf/Coby.glb',
            function (gltf) {
                mixer = new THREE.AnimationMixer(gltf.scene);
                const action = mixer.clipAction(gltf.animations[0]); /* with this variable we can start and stop the animation (and other fun stuff) */
                action.play();
                scene.add(gltf.scene);
                action.repetitions = 0; // here you can control how many repetitions of the animation
                gltf.scene.traverse((child) => {
                    if (child.isMesh) {
                        // child.material.map = new THREE.TextureLoader().load('texture.jpg');
                    }
                });
                scene.add(gltf.scene);
            },
            function (xhr) {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },
            function (error) {
                console.log('An error happened');
            }
        );

        /* MODELS */

        /* CAMERA MOVEMENT BASED ON MOUSE INPUT */

        const mouse = new THREE.Vector2(); // create a vector to store the mouse position
        document.addEventListener('mousemove', onMouseMove, false);

        function onMouseMove(event) {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = (event.clientY / window.innerHeight) * 2 + 1;

            const rotation = new THREE.Euler(
                mouse.y * 0.1, // rotate on the x-axis based on the mouse y position
                mouse.x * 0.1, // rotate on the y-axis based on the mouse x position
                0, // no rotation on the z-axis
                'XYZ' // set the order of rotations
            );

            scene.setRotationFromEuler(rotation); // set the camera rotation
        }
        /* CAMERA MOVEMENT BASED ON MOUSE INPUT */

        /* ANIMATION */

        var animate = function () {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
            if (mixer) mixer.update(clock.getDelta());
            // console.log(camera.rotation);
        };

        animate();
        
        /* ANIMATION */

        return () => mountRef.current.removeChild(renderer.domElement);
    }, []);

    return (
        <div ref={mountRef}>

        </div>
    );
}

export default SceneLogo;