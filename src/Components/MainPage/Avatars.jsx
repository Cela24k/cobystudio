import { useState } from "react";
import ReactPlayer from "react-player";

const evaVideo = (
    <ReactPlayer
        url='./video/eva.webm'
        playing={true}
        loop={true}
        muted={true}
        width={'100%'}
        height={'100%'}
        style={{
            position:'relative',
            zIndex: 1,
            right: 0,
            bottom: 0
        }}
    />
)

const otherVideo = (
    <ReactPlayer
        url='./video/ava2.webm'
        playing={true}
        loop={true}
        muted={true}
        width={'100%'}
        height={'100%'}
        style={{
            position: 'relative',
            zIndex: 1,
            right: 0,
            bottom: 0
        }}
    />
)

function Avatars() {

    const [avatar, setAvatar] = useState(true);

    function handleChange(event) {
        console.log(event);
        setAvatar((prev) => {
            return !prev;
        })
    }

    return (
        
        <div className="main b container-fluid" id="2">
            <div className="overlay">
            </div>
            <div className="row avatars-content">
                <div className="avatars-header-wrapper a col-12 col-sm-6 col-lg-4">
                    <div>
                        <h2 className="my-header">
                            DIGITAL AVATARS
                        </h2>
                        <span className="my-span">
                            At Cobystudio we specialize in high quality 3D avatars that can serve as influencers,
                            advertisement models, visual entertainers in the fashion and social media marketing
                            industry. Our avatars are design to perfectly represent your brand or product.
                        </span>
                        <br />
                        <u className="avatar-changer" onClick={handleChange}>
                            Click to switch avatars
                        </u>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 offset-lg-3">
                    {avatar ? evaVideo : otherVideo}
                </div>
            </div>
        </div>
    )
}

// function old() {
//     return (
//         <div className="container-fluid">
//             <div className="row justify-content-end">
//                 <div className="col-12 col-sm-6 col-lg-4">
//                     <div className="avatars-header-wrapper a ">
//                         <div>
//                             <h2 className="my-header">
//                                 DIGITAL AVATARS
//                             </h2>
//                             <span className="my-span">
//                                 At Cobystudio we specialize in high quality 3D avatars that can serve as influencers,
//                                 advertisement models, visual entertainers in the fashion and social media marketing
//                                 industry. Our avatars are design to perfectly represent your brand or product.
//                             </span>
//                             <br />
//                             <u className="avatar-changer" onClick={handleChange}>
//                                 Click to switch avatars
//                             </u>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-12 col-sm-6 col-lg-4">
//                     {avatar ? evaVideo : otherVideo}
//                 </div>
//             </div>
//         </div>
//     )
// }

export default Avatars;