import "./globals.css";
import localFont from "next/font/local";
const ppNeue = localFont({ src: "../public/fonts/ppneue.woff2" });

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={ppNeue.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
