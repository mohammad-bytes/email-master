import * as nodemailer from 'nodemailer';

interface ICreateTransport {
    service: string,
    auth: {
        user: string,
        password: string
    },
    from: string,
    to: string,
    subject?: string,
    html?: string
}

export async function sendEmail(body: ICreateTransport) {
    try {
        const transporter = nodemailer.createTransport({
            service: body.service,
            auth: body.auth
        });

        const mailOptions = {
            from: body.from,
            to: body.to,
            subject: body.subject,
            html: body.html,
        };
        return await transporter.sendMail(mailOptions);
    } catch (error) {
        return error;
    }
}