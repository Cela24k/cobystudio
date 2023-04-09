import { useState, useEffect, useRef } from "react";
import * as THREE from 'three';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import ReactPlayer from "react-player";
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function SceneProduct() {
    const mountRef = useRef(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {

        /* SETUP */

        let mixer; // 
        const clock = new THREE.Clock(); // used to control the animation ticks
        const loader = new GLTFLoader(); // needed to load the model 
        var scene = new THREE.Scene();
        scene.fog = new THREE.Fog( 0xcccccc, 10, 15 );
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

        camera.position.x = 0;
        camera.position.y = 0.05;
        camera.position.z = 1;
        camera.lookAt(new THREE.Vector3(0, 0, 0))
        // camera.rotation.x += 0.8;
        /* SETUP */

        /* LIGHTS */

        // const light = new THREE.AmbientLight('0xffffff', 0.36);
        
        const point_light2 = new THREE.PointLight(0xffffff, 1.5, 100);
        // const direct_light = new THREE.DirectionalLight('0xffffff', 2.4);
        // const point_light3 = new THREE.PointLight(0xffffff, 1, 100);
        
        point_light2.position.set(0, 0, 2);
        scene.add( point_light2);
        // point_light3.position.set(0, 0, -10);

        // scene.add(point_light2,point_light3);

        // direct_light.position.set(0,-0.05,0.8);
        // camera.add(direct_light);

        // scene.add(camera);

        /* LIGHTS */

        /* AXES HELPERS */

        // const axesHelper = new THREE.AxesHelper(5);
        // scene.add(axesHelper);

        /* AXES HELPERS */

        /* MODELS */

        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
        loader.setDRACOLoader(dracoLoader);

        let controls = new OrbitControls(camera, renderer.domElement);
        controls.update();
        controls.enableZoom = false;

        loader.load(
            'models/gltf/Bomber.glb',
            function (gltf) {
                mixer = new THREE.AnimationMixer(gltf.scene);
                const action = mixer.clipAction(gltf.animations[0]); /* with this variable we can start and stop the animation (and other fun stuff) */
                action.play();
                gltf.scene.children[0].position.y = 0 // scelti arbitrariamente per farla fittare all'origine 0,0,0
                gltf.scene.children[0].position.x = 0 // same
                // gltf.scene.scale.set(0.5,0.5,0.5);

                scene.add(gltf.scene);
                // action.repetitions = 0; // here you can control how many repetitions of the animation
            },
            function (xhr) {
                // console.log(xhr);
                // console.log((xhr.loaded / 199045732 * 100) + '% loaded');
            },
            function (error) {
                console.log('An error happened', error);
            }
        );

        /* MODELS */

        /* CAMERA MOVEMENT BASED ON MOUSE INPUT */

        // const mouse = new THREE.Vector2(); // create a vector to store the mouse position
        // document.addEventListener('mousemove', onMouseMove, false);
        // // document.addEventListener('')

        // function onMouseMove(event) {
        //     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        //     mouse.y = (event.clientY / window.innerHeight) * 2 + 1;

        //     const rotation = new THREE.Euler(
        //         mouse.y * -0.1, // rotate on the x-axis based on the mouse y position
        //         mouse.x * 0.1, // rotate on the y-axis based on the mouse x position
        //         0, // no rotation on the z-axis
        //         'XYZ' // set the order of rotations
        //     );

        //     scene.setRotationFromEuler(rotation); // set the camera rotation
        // }
        /* CAMERA MOVEMENT BASED ON MOUSE INPUT */

        /* ANIMATION */

        var animate = function () {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
            if (mixer) mixer.update(clock.getDelta());
            // console.log(camera.position);
            controls.update();
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

export default SceneProduct;