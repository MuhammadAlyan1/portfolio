import Footer from "./_components/footer";
import Header from "./_components/header";
import Navigation from "./_components/navigation";
import "./globals.css";
import { Toaster } from "react-hot-toast";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Alyan's Portfolio</title>
      <head />
      <body>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
        <Navigation />
        <Toaster
          toastOptions={{
            duration: 5000,
            position: "bottom-left",
            style: {
              background: "#333",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  );
}
