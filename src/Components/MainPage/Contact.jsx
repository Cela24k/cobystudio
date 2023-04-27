import { TextField, Button, Snackbar } from "@mui/material";
import { useState } from "react";

function Contact() {
    const [open, setOpen] = useState(false);

    const handleSend = () => {
        setOpen(true);
    }

    return (
        <div className="main e" id="5">
            <div className="image-wrapper">
                <div className="image-filter-panel"></div>
                <div className="portfolio-container">
                    <div className="portfolio-dialog">We are proud to showcase our 3D portfolio,
                        which serves as a powerfull tool for clients looking to Build a
                        similar 3D portfolio or website. <br></br> Our portfolio is a collection of our best
                        work showcasing our capabilities and expertise in creating a visually
                        stunning and highly interactive 3D designs. <br></br> Contact us today to learn
                        more about how we can help you create a 3D portfolio or website </div>
                    <div className="portfolio-dialog-link">3D Portfolio</div>
                </div>
                <img className="studio-image" src="images/Stanza_Coby.jpg" alt="" />
            </div>
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
        </div>
    )
}

export default Contact;