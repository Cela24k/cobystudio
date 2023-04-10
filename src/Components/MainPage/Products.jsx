import ProductTabs from "./ProductTabs";
import {  useState } from "react";

function Products() {
    const [product, setProduct] = useState('models/gltf/Bomber.glb');

    function handleTabs(tab) {
        const newUrl = 'models/gltf' + tab.split('.')[0] + '.glb';
        console.log(newUrl);
        setProduct(newUrl);
    }

    return (<div className="main c" id="3">
        <div className="product-scene-wrapper">
            <model-viewer class="viewer"
                id="my-model"
                alt="COBYSTUDIO Bomber"
                src={product}
                width="100vw"
                shadow-intensity="1"
                camera-controls touch-action="pan-y" autoplay animation-name disable-zoom disable-tap disable-pan
                poster='Spinner-1s-200px.svg'>
            </model-viewer>
            <div className="product-container">
                <div className="product-list">
                    <ProductTabs tabEvent={handleTabs} />
                </div>
            </div>
        </div>
        <div className="avatars-header-wrapper b">
            <h2 className="my-header">
                PRODUCT PRESENTATION
            </h2>
            <span className="my-span">
                We understand the importance of showcasing your products.
                This is why we offer professional product presentation services that
                are designed to help you stand out in the competitive marketplace.
                Whether you're looking to create visuals for a website, brochure, trade show,
                or even your own virtual gallery, we've got you covered.
                With our product presentation services, you can be sure that your that your
                products will be presented in the best possible way, making a lasting
                impression on your audience.
            </span>
        </div>

    </div>
    )
}

export default Products;
