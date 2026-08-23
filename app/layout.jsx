import "./base.css";
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/style.css" />
        <link rel="stylesheet" href="/assets/css/colors/aqua.css" />
        <link rel="stylesheet" href="/assets/css/fonts/thicccboi.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Manrope:wght@400;500;700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
