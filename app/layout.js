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

  openGraph: {
    title: "SAQIB IJAZ - Video Editor",
    description:
      "Professional video editing and motion design services.",
    url: "https://saqibijaz.vercel.app/",
    siteName: "Saqib Ijaz",
    images: [
      {
        url: "https://saqibijaz.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SAQIB IJAZ - Video Editor",
    description:
      "Professional video editing and motion design services.",
    images: ["https://saqibijaz.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}