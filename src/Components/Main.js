import SceneLogo from "./SceneLogo";
import ReactPlayer from "react-player";

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
    url=  './bfv41-rrqd8.webm'
    playing={true}
    loop={true}
    muted={true}
    // style={{backgroundColor: 'transparent'}} 
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
          {evaVideo}
        </div>
      </div>
    </div>
  )
}

function Page3() {
  return (<div className="main c" id="3">
    <div className="avatars-header-wrapper b">
      <div>
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
        <br />
        <u >
          Click to switch avatars
        </u>
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
      <div className="main d" id="4">

      </div>
    </div>
  );
}

export default Main;
