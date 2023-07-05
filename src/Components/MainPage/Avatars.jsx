import { useEffect, useState } from "react";
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
            position: 'relative',
            zIndex: 1,
            right: 0,
            bottom: 0,
        }}
    />
)

function EvaVideo() {
    return (
        <div className="eva-video-container">
            <video id='avatar' src="./video/eva.webm" autoPlay muted loop className="eva-video"></video>
        </div>
    )
}

function OtherVideo() {
    return (
        <div className="eva-video-container" >
            <video id='avatar' src="./video/ava2.webm" autoPlay muted loop className="eva-video"></video>
        </div>
    )
}

function Avatars() {

    const [avatar, setAvatar] = useState(true);

    function handleChange(event) {
        setAvatar((prev) => {
            return !prev;
        })
    }

    return (

        <div className="main b container-fluid" id="2">
            <div className="overlay over-eva">
            </div>
            <div className="row justify-content-center avatars-content">
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
                <div className="col-12 col-sm-8 col-lg-6 avatar-video-container">
                    {avatar ? <EvaVideo/> : <OtherVideo/>}
                </div>
            </div>
        </div>
    )
}

export default Avatars;