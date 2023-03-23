import SceneLogo from "./SceneLogo";
import ReactPlayer from "react-player";
import SceneProduct from "./SceneProduct";
import ProductTabs from "./ProductTabs";
import { TextField } from "@mui/material";

function Page1() {
  return (
    <div className="main a" id="1">
      <SceneLogo />
      <div className="header-wrapper">
        <div className="header-container">
          <h1 style={{ margin: 0 }}>3D Provider</h1>
          <h2 style={{ fontWeight: 100, margin: 0 }}>Bringing your ideas to life</h2>
        </div>
      </div>
    </div>
  )
}

const evaVideo = (
  <ReactPlayer
    url='./video/eva.webm'
    playing={true}
    loop={true}
    muted={true}
    // height={'70vh'}
    style={{
      right: 'calc(-130px + 2vw)',
      position: 'absolute',
    }}
  />
)

const feedVideo = (
  <ReactPlayer
    url='./video/Voglia_Di_Feed.webm'
    playing={true}
    loop={true}
    muted={true}
    height={'100vh'}
    style={{
      right: 'calc(2vw)',
      position: 'absolute',
    }}
  />
)

function Page2() {
  return (
    <div className="main b" id="2">
      <div className="avatars-header-wrapper a ">
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
          <u >
            Click to switch avatars
          </u>
        </div>
      </div>
      {evaVideo}
    </div>
  )
}

// COMPONENTE PAGINA PRODOTTI 

function Page3() {
  return (<div className="main c" id="3">
    <div className="avatars-header-wrapper b">
      <div className="presentation-wrapper">
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
    <div className="product-scene-wrapper">
      <SceneProduct />
    </div>
    <div className="product-container">
      <div className="product-list">
        <ProductTabs />
      </div>
    </div>
  </div>
  )
}

function Page4() {
  return (
    <div className="main d" id="4">
      {feedVideo}
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
    </div>
  )
}

function Page5() {
  return (
    <div className="main e" id="5">
      <div className="contact-wrapper" >
        <div className="contact-row">
          <h1>Contact us</h1>
        </div>

        <div className="contact-row">
          <TextField fullWidth id="standard-basic" label="Name" variant="standard" />
          <div className="form-divider"></div>
          <TextField fullWidth id="standard-basic" label="Surname" variant="standard" />
        </div>

        <div className="contact-row">
          <TextField fullWidth id="standard-basic" label="Email *" variant="standard" />
          <div className="form-divider"></div>
          <TextField fullWidth id="standard-basic" label="Phone" variant="standard" />
        </div>

        <div className="contact-row">
          <TextField multiline rows={2} fullWidth id="standard-basic" label="Message" variant="standard" />
        </div>

      </div>
    </div>
  )
}

function Main() {
  return (
    <div className="main-wrapper">
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
    </div>
  );
}

export default Main;
