# EmailMaster

Send emails from Node.js – easy as cake! 🍰✉️

EmailMaster is a lightweight npm package for sending emails using the built-in nodemailer module in Node.js.

## Installation

You can install EmailMaster via npm:

```bash
npm install email-master
npm install @types/email-master

```
# configuration

```
const options = {
    host: "smtp.example.com",
    port: 587,
    auth: {
        user: "Test@gmail.com",
        password: "Test@123"
    },
    from:"Test@gmail.com",
    to:"Test@gmail.com",
    subject:"Test Email",
    html:`<h1>Test EmailMaster</h1>`
}
await sendEmail(options);


```
