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
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
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
