import AppNavbar from "@/components/app/navbar";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "le.weather",
};

export default function RootLayout({ children }: Readonly<React.PropsWithChildren>) {
  return (
    <html lang="en">
      <body className="sm:container sm:max-w-screen-sm min-h-screen bg-muted">
        <div className="bg-background min-h-screen flex flex-col shadow-sm">
          <AppNavbar />
          {children}
        </div>
      </body>
    </html>
  );
}
