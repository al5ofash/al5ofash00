import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "As6yer El-Chemistry",
  description: "منصة تعليم كيمياء عربية بتصميم نيوني مستقبلي.",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
