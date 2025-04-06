
import "./globals.css";
import NextAuthSessionProvider from "../Providers/NextjsAuthSessionProvider";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextAuthSessionProvider>
        <body>{children}</body>
      </NextAuthSessionProvider>
    </html>
  );
}
