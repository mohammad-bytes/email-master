import * as nodemailer from 'nodemailer';

interface ICreateTransport {
    host: string,
    port: number,
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
            host: body.host,
            port: body.port,
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
