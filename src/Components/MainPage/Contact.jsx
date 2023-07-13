import { TextField, Button, Snackbar } from "@mui/material";
import { useState } from "react";

function Contact() {
    const [open, setOpen] = useState(false);

    const handleSend = () => {
        setOpen(true);
    }

    return (
        <div className="main f" id="6">
            <div className="contact-flex-container">
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
                        <TextField multiline maxRows={4} fullWidth id="standard-basic" label="Message" variant="standard" />
                    </div>

                    <div className="send-row">
                        <Button className="send-button" variant="outlined">Send</Button>
                    </div>

                </div>
            </div>
            <div className="container">
                <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
                    <div className="col mb-3">
                        <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
                            <img src="images/logo2.svg" alt="" />
                        </a>
                        {/* <p class="text-muted">© 2022</p> */}
                    </div>
                    <div className="col mb-3"></div>
                    <div class="col mb-3">
                        <h5>ABOUT US</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Saverstudio è un agenzia di comunicazione creativa
                            digitale con sede a Vicenza. Specializzata in progetti di 
                            comunicazione integrata per aziende.</a></li>
                        </ul>
                    </div>
                    <div class="col mb-3">
                        <h5>NEWS</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
                        </ul>
                    </div>
                    <div class="col mb-3">
                        <h5>MENU</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Contact;