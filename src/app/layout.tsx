import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Portfolio of John Emmanuel S. Marco — Full-Stack Developer & QA Tester specializing in AI-powered web solutions, automation, and real-time applications.",
  openGraph: {
    title: "John Emmanuel Marco - Portfolio",
    description:
      "Portfolio of John Emmanuel S. Marco — Full-Stack Developer & QA Tester specializing in AI-powered web solutions, automation, and real-time applications.",
    url: "",
    siteName: "",
    images: [
      {
        url: "https://media.licdn.com/dms/image/v2/D5603AQF40U_E-6fU2Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1682683941506?e=1758758400&v=beta&t=1ZqNjaKwVrmNCF2wFOXeUfL4DDkd3hzJQAgzuGCPstI", // put your image in /public/profile.jpg
        width: 800,
        height: 600,
        alt: "John Emmanuel Marco Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
