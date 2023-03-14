import { useState, useEffect, useRef } from "react";
import * as THREE from 'three';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import ReactPlayer from "react-player";

function SceneProduct() {
    return (
        <div>
            <ReactPlayer
                url='./bfv41-rrqd8.webm'
                playing={true}
                loop={true}
                muted={true}
                height={'70vh'}
                style={{
                    left: 'calc(-130px + 2vw)',
                    position: 'absolute',
                }}
            />
            
        </div>
    );
}

export default SceneProduct;