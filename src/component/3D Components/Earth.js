import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import earthTexture from "./earth4.jpg";
import TWEEN from '@tweenjs/tween.js';
import starTexture from "./Star3.jpg";
const Earth = () => {
    const canvasRef = useRef(null);
    const [camera, setCamera] = useState(null);
    const [scene, setScene] = useState(null);
    const [renderer, setRenderer] = useState(null);



    useEffect(() => {

        const canvas = canvasRef.current;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        // Create camera
        const camera = new THREE.PerspectiveCamera(70, width / height, 1, 1000);
        camera.position.set(-2, 0.3, 5);
        setCamera(camera);


        // Create scene
        const scene = new THREE.Scene();
        setScene(scene);

        // Create renderer
        const renderer = new THREE.WebGLRenderer({ canvas });
        renderer.setSize(width, height);
        setRenderer(renderer);

        // Add earth to scene
        const geometry = new THREE.SphereGeometry(2.5, 80, 72);
        const material = new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load(earthTexture),
        });
        const earth = new THREE.Mesh(geometry, material);
        scene.add(earth);

        // Add lighting to scene
        const ambientLight = new THREE.AmbientLight(0x0000ff, 0.5);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0x0000ff, 0.5);
        directionalLight.position.set(0, 1, 1);
        scene.add(directionalLight);

        // Add starry background to scene
        const starGeometry = new THREE.SphereGeometry(1000, 64, 32);
        const starMaterial = new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load(starTexture),
            side: THREE.BackSide,
        });
        const stars = new THREE.Mesh(starGeometry, starMaterial);
        scene.add(stars);

        // Animate scene
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
            earth.rotation.y += 0.001;
        };
        animate();

        let mouseDown = false;
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        const handleMouseDown = (event) => {
            event.preventDefault();
            mouseDown = true;
            mouseX = event.clientX - windowHalfX;
            mouseY = event.clientY - windowHalfY;
            targetX = earth.rotation.y;
            targetY = earth.rotation.x;
        }

        const handleMouseMove = (event) => {
            if (mouseDown) {
                const mouseXNew = event.clientX - windowHalfX;
                const mouseYNew = event.clientY - windowHalfY;
                const speed = 0.0013;
                const targetXNew = targetX + (mouseXNew - mouseX) * speed;
                const targetYNew = targetY + (mouseYNew - mouseY) * speed;
                earth.rotation.y = targetXNew;
                earth.rotation.x = targetYNew;
            }
        }

        const handleMouseUp = () => {
            mouseDown = false;
        }


        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        const animateZoom = () => {
            const startFov = camera.fov;
            const endFov = 70; // Nouvelle valeur du fov après le zoom
            const duration = 1500; // Durée de l'animation en ms
            const startTime = Date.now(); // Temps de départ de l'animation

            const animate = () => {
                const timeElapsed = Date.now() - startTime;
                const progress = timeElapsed / duration;
                camera.fov = startFov + (endFov - startFov) * progress;
                camera.updateProjectionMatrix();

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            animate();
        };

        camera.fov = 40;
        camera.updateProjectionMatrix();
        animateZoom(camera, 5);
    }, []);

    return (
        <div className="absolute -z-10 top-0 w-full h-full bg-blue-900">
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-full h-earthheightsize">
                    <canvas style={{ width: "100%", height: "100%" }} ref={canvasRef} />
                </div>
            </div>
        </div>
    );
};
export default Earth;