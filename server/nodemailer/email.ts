import { generatePasswordResetEmailHtml, generateResetSuccessEmailHtml, generateWelcomeEmailHtml, htmlContent } from "./htmlEmail";
import sendMail from "./sendMail"; // ✅ Nodemailer-based sendMail function

export const sendVerificationEmail = async (email: string, verificationToken: string) => {
    const html = htmlContent.replace("{verificationToken}", verificationToken);
    try {
        await sendMail({
            to: email,
            subject: "Verify your email",
            text: `Your verification code is: ${verificationToken}`,
            html: html,
        });
    } catch (error) {
        console.log(error);
        throw new Error("Failed to send email verification");
    }
};

export const sendWelcomeEmail = async (email: string, name: string) => {
    const html = generateWelcomeEmailHtml(name);
    try {
        await sendMail({
            to: email,
            subject: "Welcome to BhojanMap",
            text: `Hi ${name}, welcome to BhojanMap!`,
            html: html,
        });
    } catch (error) {
        console.log(error);
        throw new Error("Failed to send welcome email");
    }
};

export const sendPasswordResetEmail = async (email: string, resetURL: string) => {
    const html = generatePasswordResetEmailHtml(resetURL);
    try {
        await sendMail({
            to: email,
            subject: "Reset your password",
            text: `Reset your password by clicking here: ${resetURL}`,
            html: html,
        });
    } catch (error) {
        console.log(error);
        throw new Error("Failed to send password reset email");
    }
};

export const sendResetSuccessEmail = async (email: string) => {
    const html = generateResetSuccessEmailHtml();
    try {
        await sendMail({
            to: email,
            subject: "Password Reset Successfully",
            text: "Your password has been successfully reset.",
            html: html,
        });
    } catch (error) {
        console.log(error);
        throw new Error("Failed to send password reset success email");
    }
};
