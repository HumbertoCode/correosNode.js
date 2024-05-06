const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

class EmailSender {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'zeffel829@gmail.com',
                pass: Zeffel-2005
            }
        });
    }

    enviarCorreo(destinatario, asunto, cuerpo) {
        const mailOptions = {
            from: 'zeffel829@gmail.com',
            to: destinatario,
            subject: asunto,
            text: cuerpo
        };

        this.transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email enviado: ' + info.response);
            }
        });
    }
}

const emailSender = new EmailSender();

app.post('/enviar-correo', (req, res) => {
    const { destinatario, asunto, cuerpo } = req.body;
    emailSender.enviarCorreo(destinatario, asunto, cuerpo);
    res.send('Correo enviado exitosamente');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


