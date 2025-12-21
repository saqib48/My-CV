import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SAQIB IJAZ - Video Editor",
  description: "Professional video editing and motion design services. Specializing in YouTube content, social media reels, commercials, and cinematic storytelling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
