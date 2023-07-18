import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
    return (
        <div className="footer-page">
            <div className="container-fluid">
                <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top myfooter">
                    <div className="col mb-3">
                        <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                            <img className="logo-footer" src="images/logo2.svg" alt="" />
                        </a>
                        {/* <p class="text-muted">© 2022</p> */}
                    </div>
                    <div className="col mb-5 footer-text-container">
                        <h5>ABOUT US</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted about-label lighttext">Saverstudio è un agenzia di comunicazione creativa
                                digitale con sede a Vicenza. Specializzata in progetti di
                                comunicazione integrata per aziende.</a></li>
                        </ul>
                    </div>
                    <div className="col mb-3 footer-text-container">
                        <h5>MENU</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted about-label">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted about-label">Features</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted about-label">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted about-label">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted about-label">About</a></li>
                        </ul>
                    </div>
                    <div className="col mb-2 footer-text-container">
                        <h5>CONTATTACI</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2 contact-card ">
                                <CallIcon className="contact-icon" />
                                <a href="#" className="nav-link p-0 text-muted about-label">+39 0444 212360</a>
                            </li>
                            <li className="nav-item mb-2 contact-card">
                                <EmailIcon className='contact-icon'/>
                                <a href="#" className="nav-link p-0 text-muted about-label">info@cobystudio.it</a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer;