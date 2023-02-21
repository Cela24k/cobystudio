import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { AnimationMixer } from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function SceneLogo() {
    const mountRef = useRef(null);

    useEffect(() => {


    /* SETUP */

        const loader = new GLTFLoader();
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

        camera.position.z = 2;

    /* SETUP */

    /* LIGHTS */

        const light = new THREE.AmbientLight('white',0.3);


        scene.add(light);

    /* LIGHTS */

    /* MODELS */

        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        var cube = new THREE.Mesh(geometry, material);
        // var controls = new OrbitControls( camera, renderer.domElement );
        // controls.update();

        scene.add(cube);

        loader.load(
            'models/gltf/Coby.glb',
            function (gltf) {

                console.log(gltf)
                scene.add(gltf.scene);

                // gltf.animations; // Array<THREE.AnimationClip>
                // gltf.scene; // THREE.Group
                // gltf.scenes; // Array<THREE.Group>
                // gltf.cameras; // Array<THREE.Camera>
                // gltf.asset; // Object
            },
            function (xhr) {

                console.log((xhr.loaded / xhr.total * 100) + '% loaded');

            },
            function (error) {
                console.log('An error happened');
            }
        );

        var animate = function () {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);

            // controls.update();
            // console.log(camera.position);
        };

    /* MODELS */

        animate();

        return () => mountRef.current.removeChild(renderer.domElement);
    }, []);

    return (
        <div ref={mountRef}>

        </div>
    );
}

export default SceneLogo;