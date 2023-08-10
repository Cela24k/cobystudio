import ProductTabs from "./ProductTabs";
import { useState } from "react";

const prods = ['models/gltf/cube_robot/scene.gltf', 'models/gltf/coffee/scene.gltf', 'models/gltf/headphones/scene.gltf']

function Products() {
    const [product, setProduct] = useState('models/gltf/cube_robot/scene.gltf');

    function handleTabs(tab) {
        const newUrl = tab;
        console.log(newUrl);
        setProduct(newUrl);
    }

    return (<div className="main c container-fluid" id="3">
        <div className="row justify-content-baseline product-row">
            <div className="product-scene-wrapper col-12 col-sm-8 col-lg-6">
                <div className="product-viewer-container">
                    {prods.map((e, i) => {
                        if (product === e) {
                            return (
                                <model-viewer key={i} class="viewer"
                                    preload
                                    id="my-model"
                                    alt="COBYSTUDIO Bomber"
                                    src={e}
                                    width="100vw"
                                    shadow-intensity="1"
                                    camera-controls touch-action="pan-y" autoplay animation-name disable-zoom disable-tap disable-pan
                                    poster='Spinner-1s-200px.svg'>
                                </model-viewer>)
                        }
                        else return null;
                    })}
                </div>
                <div className="product-list">
                    <ProductTabs tabEvent={handleTabs} sx={{height:'100%'}} />
                </div>
            </div>
            <div className="avatars-header-wrapper b col-12 col-sm-6 col-lg-4">
                <h2 className="my-header">
                    PRODUCT PRESENTATION
                </h2>
                <span className="my-span">
                    We understand the importance of showcasing your products.
                    This is why we offer professional product presentation services that
                    are designed to help you stand out in the competitive marketplace.
                    Whether you're looking to create visuals for a website, brochure, trade show,
                    or even your own virtual gallery, we've got you covered. 
                    With our product presentation services, you can be sure that your
                    products will be presented in the best possible way, making a lasting
                    impression on your audience.
                </span>
            </div>
        </div>
    </div>
    )
}

export default Products;
