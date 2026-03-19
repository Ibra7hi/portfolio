import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import { cookies } from "next/headers";
import { Language } from "@/lib/i18n";



export const metadata: Metadata = {
  title: "AI Engineer & Full Stack Developer",
  description: "AI Engineer, Full Stack Web Developer, and React Native Mobile Developer",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value as Language) || "ar";

  return (
    <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} antialiased`}
        style={{ minHeight: '100vh' }}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <LanguageProvider initialLanguage={lang}>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
