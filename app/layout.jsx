import "./globals.css";
import { AuthProvider } from "../context/AuthContext";

export const metadata = {
  title: "AI-MockMate",
  description: "AI-powered mock interview assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
