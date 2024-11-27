import type { Metadata } from "next";
import "./globals.css";
import { Audiowide } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BlackDAO",
  description: "Empowering Autonomous AI Agents for All",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        {/* HTML Meta Tags */}
        <meta property="og:url" content="https://blackdao.ai" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="BlackDAO" />
        <meta
          property="og:description"
          content="Empowering Autonomous AI Agents for All"
        />
        <meta
          property="og:image"
          content="https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v4/blackdao.ai/BlackDAO/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2F009c0988-295f-4ee6-93f5-5a5464f4dd30.png%3Ftoken%3D_W_udaXNLyhP7AF4Vs6r3FB50wgotAnPKAEL6MPGC0g%26height%3D500%26width%3D500%26expires%3D33268641314/og.png"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="blackdao.ai" />
        <meta property="twitter:url" content="https://blackdao.ai" />
        <meta name="twitter:title" content="BlackDAO" />
        <meta
          name="twitter:description"
          content="Empowering Autonomous AI Agents for All"
        />
        <meta
          name="twitter:image"
          content="https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v4/blackdao.ai/BlackDAO/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2F009c0988-295f-4ee6-93f5-5a5464f4dd30.png%3Ftoken%3D_W_udaXNLyhP7AF4Vs6r3FB50wgotAnPKAEL6MPGC0g%26height%3D500%26width%3D500%26expires%3D33268641314/og.png"
        />
      </head>
      <body
        className={`antialiased min-h-screen relative noise-bg ${audiowide.className}`}
        suppressHydrationWarning={true}
      >
        <div className="flex flex-col min-h-screen relative bg-black/50 md:h-screen">
          {/* Header */}
          <header className="py-2 md:py-4 px-4 md:px-8 z-10">
            <nav className="relative flex flex-col md:flex-row items-center h-auto md:h-16 container mx-auto">
              <div className="text-white text-xl md:text-2xl font-bold hover:animate-glitch mb-4 md:mb-0">
                BLACKDAO
              </div>
              <div className="flex flex-wrap gap-4 md:gap-8 justify-center text-base md:text-xl w-full">
                <a href="#" className="text-white hover:animate-glitch">
                  HOME
                </a>
                <a href="#" className="text-white hover:animate-glitch">
                  BUY
                </a>
                <a
                  href="https://x.com/BLACKDAOAI"
                  className="text-white hover:animate-glitch"
                >
                  TWITTER
                </a>
                <a
                  href="https://t.me/BLACK_DAO"
                  className="text-white hover:animate-glitch"
                >
                  TELEGRAM
                </a>
              </div>
            </nav>
          </header>

          {/* Main content */}
          <main className="flex-1 container max-w-7xl mx-auto px-2 md:px-4 z-10">
            {children}
          </main>

          {/* Footer */}
          <footer className="w-fit py-2 md:py-4 md:pb-20 text-center container z-10 mx-auto">
            <div className="text-base md:text-lg bg-black/70 py-1 md:py-2 px-4 md:px-10 text-white rounded-lg break-all">
              BlackDAO AI Agent Contract
            </div>
          </footer>
          <Analytics />
        </div>
      </body>
    </html>
  );
}
