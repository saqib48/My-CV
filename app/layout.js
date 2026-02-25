import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SAQIB IJAZ - Video Editor",
  description:
    "Professional video editing and motion design services. Specializing in YouTube content, social media reels, commercials, and cinematic storytelling.",

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}