import { TextField } from "@mui/material";

function Contact() {
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

                <div className="send-row">

                </div>

            </div>
        </div>
    )
}

export default Contact;