import type { Metadata } from "next";
import "./globals.css";
import BackgroundSvg from "@/components/background-svg";

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
        {children}
      </body>
    </html>
  );
}
