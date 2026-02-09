import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, service, subject, message } = body;

        // Check for required fields
        if (!name || !email) {
            return NextResponse.json(
                { message: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Configure transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.SMTP_USER, // Sender address
            to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // Receiver address
            subject: subject || `New Service Inquiry: ${service || 'General Inquiry'}`,
            text: `
                Name: ${name}
                Email: ${email}
                Phone: ${phone || 'Not provided'}
                Service Interested In: ${service || 'Not specified'}
                Subject: ${subject || 'N/A'}
                
                Message:
                ${message || 'N/A'}
            `,
            html: `
                <h3>New Inquiry</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                <p><strong>Service:</strong> ${service || 'Not specified'}</p>
                <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
                <br/>
                <p><strong>Message:</strong></p>
                <p>${message ? message.replace(/\n/g, '<br>') : 'N/A'}</p>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { message: 'Failed to send email' },
            { status: 500 }
        );
    }
}
