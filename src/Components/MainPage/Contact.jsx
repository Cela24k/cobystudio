import { TextField, Button, Snackbar } from "@mui/material";
import { useState } from "react";
import CreateIcon from '@mui/icons-material/Create';

function Contact() {
    const [open, setOpen] = useState(false);

    const handleSend = () => {
        window.location.href = "mailto:info@cobystudio.it"
    }

    return (
        <div className="main f" id="6">
            <div className="contact-flex-container">
                <div className="contact-wrapper" >
                    <div className="contact-row">
                        <h1>Hai un progetto in mente? Parliamone!</h1>
                    </div>

                    <div className="contact-row">
                        <span className="my-span">Scrivici per avere maggiori informazioni o anche solo per condividere un caffè</span>
                    </div>

                    {/* <div className="contact-row">
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
                    </div> */}

                    <div className="send-row">
                        <Button className="send-button" variant="outlined" onClick={handleSend}> <CreateIcon style={{marginRight:"5px"}}/> Contattaci</Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact;