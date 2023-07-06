import SceneLogo from "./SceneLogo";
import ReactPlayer from "react-player";
import SceneProduct from "./SceneProduct";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Avatars from "./MainPage/Avatars"
import Contact from "./MainPage/Contact"
import Products from "./MainPage/Products";
import { useState, useEffect } from 'react';

function getScrollPercent() {
  var h = document.documentElement,
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';
  return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
}


function Logo() {

  function handleClick() {
    const scrollTarget = document.getElementsByClassName('main f')

    if (scrollTarget)
      scrollTarget[0].scrollIntoView(false);
  }

  useEffect(() => {
    const mw = document.querySelector('#my-model-logo');

    const play = () => {
      mw.timeScale = 1;
      mw.play({ repetitions: 1 })
    }

    mw.addEventListener('load', play);
    mw.addEventListener('finish', play);
  }, [])

  return (
    <div className="container-fluid main a" id="1">
      <div className="row logo-row">
        <model-viewer class="viewer"
          preload
          id="my-model-logo"
          alt="COBYSTUDIO Logo"
          src='models/gltf/Coby.glb'
          width="100vw"
          shadow-intensity="1"
          camera-controls touch-action="pan-y" animation-name disable-zoom disable-tap disable-pan
          poster='Spinner-1s-200px.svg'>
          <div slot="interaction-prompt"></div>
        </model-viewer>
      </div>
      <div className="row logo-header-wrapper" onClick={handleClick}>
        <div className="header-container">
          <h1 className="header-content" >3D Provider</h1>
          <h2 className="header-subcontent" >Bringing your ideas to life</h2>
          <KeyboardArrowDownIcon />
        </div>
      </div>
    </div>
  )
}

const feedVideo = (val) => {
  const videos = ['./video/Voglia_Di_Feed.webm', './video/Bomber_Turntable.mp4', './video/Busto_infuocato.mp4'];

  switch (val) {
    case 0:
      return (
        <ReactPlayer
          url={videos[0]}
          playing={true}
          loop={true}
          muted={true}
          height={'100%'}
          width={'100%'}
        />
      )
    case 1:
      return (
        <ReactPlayer
          url={videos[1]}
          playing={true}
          loop={true}
          muted={true}
          height={'100%'}
          width={'100%'}
        />
      )
    case 2:
      return (
        <ReactPlayer
          url={videos[2]}
          playing={true}
          loop={true}
          muted={true}
          height={'100%'}
          width={'100%'}
        />
      )
    default:
      break;
  }
}


// COMPONENTE PAGINA PRODOTTI 

function VisualArt() {
  const [currentVideo, setCurrentVideo] = useState(0)

  function handleChange(event) {
    setCurrentVideo((prev) => {
      console.log(prev)
      if (prev === 2)
        return 0;
      return ++prev;
    })
  }

  return (
    <div className="container-fluid main d" id="4">
      <div className="row justify-content-center visual-container">
        <div className="col-12 col-sm-6 col-lg-4 avatars-header-wrapper c">
          <div>
            <h2 className="my-header" >
              VISUAL ART
            </h2>
            <span className="my-span">
              We offer a wide range of visual art services, creating stunning effects
              that are guaranteed to captivate your audience.
              From mesmerizing concert visuals to one of a kind art prints, we have the expertise to bring your vision to life.
              Our 3D art is not only about appearance but also interactive, which makes it a great choice for art toys
              or unique 3D prints for artists.
              Let us help you take your projects to the next level with our visually striking and unique 3D art.
              Contact us today to learn more about how we can help you create something truly special.
            </span>
            <br />
            <u className="avatar-changer" onClick={handleChange}>
              Click to switch artwork
            </u>
          </div>
        </div>
        <div className="col-12 col-sm-8 col-lg-6 visual-reel-container">
          <div className="feed-overlay">
          </div>
          {feedVideo(currentVideo)}
        </div>
      </div>
    </div>
  )
}


function Reel() {

  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', (event) => {

      // :^3 hard coded at 15% of page height
      if (Math.floor(getScrollPercent()) >= 15)
        setPlaying(true);
    })
  }, [])

  return (
    <ReactPlayer className="main f"
      url='./video/REEL_new.mp4'
      playing={playing}
      loop={true}
      muted={true}
      controls={true}
      height={'100%'}
      width={'100vw'}
      style={{
        backgroundColor: "#fdfde6"
      }}
    />
  )
}

function Main() {
  return (
    <div className="main-wrapper">
      <Logo />
      <Reel />
      <Avatars />
      <Products />
      <VisualArt />
      <Contact />
    </div>
  );
}

export default Main;
