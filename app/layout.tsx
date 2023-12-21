import { TopbarMobile } from "./(landing)/components/topbar-mobile";
import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopbarMobile />
        {children}
      </body>
    </html>
  );
}
