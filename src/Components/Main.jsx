import SceneLogo from "./SceneLogo";
import ReactPlayer from "react-player";
import SceneProduct from "./SceneProduct";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Avatars from "./MainPage/Avatars"
import Contact from "./MainPage/Contact"
import Products from "./MainPage/Products";
function Logo() {

  function handleClick(){
    const scrollTarget = document.getElementsByClassName('main f')

    if (scrollTarget)
      scrollTarget[0].scrollIntoView(false);
  }

  return (
    <div className="main a" id="1">
      <SceneLogo />
      <div className="header-wrapper" onClick={handleClick}>
        <div className="header-container">
          <h1 style={{ margin: 0 }}>3D Provider</h1>
          <h2 style={{ fontWeight: 100, margin: 0 }}>Bringing your ideas to life</h2>
          <KeyboardArrowDownIcon />
        </div>
      </div>
    </div>
  )
}

const feedVideo = (
  <ReactPlayer
    url='./video/Voglia_Di_Feed.webm'
    playing={true}
    loop={true}
    muted={true}
    height={'100vh'}
    width={'70%'}
    style={{
      right: '0',
    }}
  />
)

// COMPONENTE PAGINA PRODOTTI 

function VisualArt() {
  return (
    <div className="main d" id="4">
      <div className="avatars-header-wrapper c">
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
        </div>
      </div>
      {feedVideo}
    </div>
  )
}


function Reel() {
  return (
    <ReactPlayer className="main f"
      url='./video/REEL.mp4'
      playing={true}
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
