import { Montserrat } from "next/font/google";
import "./globals.css";
import Menu from "./components/Menu/page";
import Footer from "./components/Footer/page";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Shrivel | Shorten any URL",
  description: "Shorten any URL with a custom name",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
