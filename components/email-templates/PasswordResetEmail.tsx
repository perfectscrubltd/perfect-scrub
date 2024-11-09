// import * as React from 'react';
// import { Html, Head, Button, Text, Img } from "@react-email/components";
// import PSLogo from "@/public/perfect-scrub-logo.png"

// type PasswordResetEmailProps = {
//     buttonText: string;
//     url: string;
//     endText: string;
//     startText: string;
// }

// const baseUrl = process.env.VERCEL_URL
//   ? `https://${process.env.VERCEL_URL}`
//   : "";

// export function PasswordResetEmail({ url, buttonText, startText, endText }: PasswordResetEmailProps) {
//     return (
//         <Html lang="en">
//             <Head>
//                 <title>Perfect Scrub Cleaning - Password Reset</title>
//             </Head>
//             <Img 
//             src={`${baseUrl}/static/perfect-scrub-logo.png`}
//             alt="Cat" width="300" height="300" />
//             <Text>{startText}</Text>

//             <Button href={url} style={{ backgroundColor: "#12af1d", padding: "10px 20px" }} >{buttonText}</Button>

//             <Text>{endText}</Text>
//         </Html>
//     );
// }
import {
    Body,
    Button,
    Container,
    Head,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface PasswordResetEmailProps {
    userFirstname?: string;
    resetPasswordLink?: string;
  }
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
  
  export const PasswordResetEmail = ({
    userFirstname,
    resetPasswordLink,
  }: PasswordResetEmailProps) => {
    return (
      <Html>
        <Head />
        <Preview>Perfect Scrub reset your password</Preview>
        <Body style={main}>
          <Container style={container}>
            <Img
              src={`${baseUrl}/static/perfect-scrub-logo.png`}
              width="40"
              height="33"
              alt="Perfect Scrub"
            />
            <Section>
              <Text style={text}>Hi {userFirstname},</Text>
              <Text style={text}>
                Someone recently requested a password change for your Perfect Scrub
                account. If this was you, you can set a new password here:
              </Text>
              <Button style={button} href={resetPasswordLink}>
                Reset password
              </Button>
              <Text style={text}>
                If you don&apos;t want to change your password or didn&apos;t
                request this, just ignore and delete this message.
              </Text>
              <Text style={text}>
                To keep your account secure, please don&apos;t forward this email
                to anyone.
              </Text>
              <Text style={text}>Have a nice day!</Text>
            </Section>
          </Container>
        </Body>
      </Html>
    );
  };
  
  PasswordResetEmail.PreviewProps = {
    userFirstname: "Alan",
    resetPasswordLink: "https://perfectscrubcleaning.com",
  } as PasswordResetEmailProps;
  
  export default PasswordResetEmail;
  
  const main = {
    backgroundColor: "#f6f9fc",
    padding: "10px 0",
  };
  
  const container = {
    backgroundColor: "#ffffff",
    border: "1px solid #f0f0f0",
    padding: "45px",
  };
  
  const text = {
    fontSize: "16px",
    fontFamily:
      "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
    fontWeight: "300",
    color: "#404040",
    lineHeight: "26px",
  };
  
  const button = {
    backgroundColor: "#007ee6",
    borderRadius: "4px",
    color: "#fff",
    fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
    fontSize: "15px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    width: "210px",
    padding: "14px 7px",
  };
  
  const anchor = {
    textDecoration: "underline",
  };
