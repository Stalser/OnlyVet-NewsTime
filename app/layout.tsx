import "./globals.css";

export const metadata = {
  title: "OnlyVet — онлайн-ветеринарная клиника",
  description:
    "OnlyVet — премиальная онлайн-ветклиника: экспертные консультации, второе мнение, разбор анализов и сопровождение хронических пациентов. За пределами заботы.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
