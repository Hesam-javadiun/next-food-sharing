import type { Metadata } from "next";
import "./globals.css";
import BackgroundSvg from "@/components/background-svg";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Food Reservation",
  description: "An application to share delicious food!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BackgroundSvg />
        <Header />
        <div >
          <h1 >Root Layout component</h1>
        </div>
        {children}
      </body>
    </html>
  );
}
